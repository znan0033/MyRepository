$(function(){
	
	refresh();      //局部刷新
	function refresh(){
		var arr = $.cookie("cart2");
		if (arr) {
			arr = JSON.parse(arr); //JSON解析	

			//先清空ul中的所有li
			$(".list").empty();
			$(".shop2").html("");
			//遍历arr, 创建li节点
			var total = 0; //总价
			var a = [];
			var sum = "";
			for (var i=0; i<arr.length; i++){
				var obj = arr[i]; //每个商品数据
				//创建li节点
				var li = $("<li></li>").appendTo(".list");
				if (obj.checked) {
					$("<input class='check' type='checkbox' checked='checked' />").appendTo(li);
				}else {
					$("<input class='check' type='checkbox' />").appendTo(li);
				}
				$("<img src="+ obj.small[0].img +" />").appendTo(li);
				$("<a href='detail.html?id="+ obj.id +"'>"+obj.name+"</a>").appendTo(li);
				$("<input class='delete' type='button' value='删除' />").appendTo(li);
				$("<input class='plus' type='button' value='+' />").appendTo(li);
				$("<input class='number' type='text' value="+ obj.num +" />").appendTo(li);
				$("<input class='minus' type='button' value='-' />").appendTo(li);
				$("<span>"+ obj.unit + obj.price +"</span>").appendTo(li);
								
				//求总价
				if (obj.checked) {
					total += (obj.price * obj.num);
				}

					//页面header部分购物车
				 	a.push(parseInt($(".number").eq(i).val()));
					sum = a.reduce(function(pre, cur){return pre+cur });
					$(".shop1 span").html(sum);   //数量
					var div = $("<div></div>").appendTo(".shop2");
					$("<img src='"+ obj.small[0].img +"'/>").appendTo(div);
					$("<p>"+ obj.name +"</p>").appendTo(div);
					$("<a class='dell'>"+ 'X' +"</a>").appendTo(div);
					$("<span>"+ obj.unit + obj.price + ' &nbsp; * ' +obj.num +"</span>").appendTo(div);
			}
			$(".bottom-02 span").html(obj.unit + total);
			$("<p class='heji'>"+ '合计'+ "<b>"+obj.unit + total  +"</b><input type='button' value='去结算' /></p>").appendTo(".shop2");
			 			
		}
	}




	//删除
	$(".shop2").on("click",".dell",function(){
		var index = $(this).index(".dell");
		$(".shop1 span").html("0");
		//获取cookie，删掉第index个商品
		var arr = JSON.parse($.cookie("cart2"));
		arr.splice(index, 1); //删除数组arr的第index个元素并保存cookie
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});
		
		isAllChecked(); //判断是否全部选择了商品
		refresh(); //刷新页面
	})

	$(".list").on("click",".delete",function(){
		var index = $(this).index(".delete");
		//获取cookie，删掉第index个商品
		var arr = JSON.parse($.cookie("cart2"));
		arr.splice(index, 1); //删除数组arr的第index个元素
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});
		
		isAllChecked(); //判断是否全部选择了商品
		refresh(); //刷新页面
	})


	//+ 
	$(".list").on("click",".plus",function(){
		var index = $(this).index(".plus");
		
		var arr = JSON.parse($.cookie("cart2"));
		arr[index].num++; 
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});
		refresh(); //刷新页面
	})
	
	//-
	$(".list").on("click",".minus",function(){
		var index = $(this).index(".minus");
		
		var arr = JSON.parse($.cookie("cart2"));
		arr[index].num--; 
		if (arr[index].num < 1) {
			arr[index].num = 1;
		}
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});		
		refresh(); //刷新页面
	})
	
	//勾选/取消勾选
	$(".list").on("click", ".check", function(){
		var index = $(this).index(".check");
		
		var arr = JSON.parse($.cookie("cart2"));
		arr[index].checked = !arr[index].checked;
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});
		
		isAllChecked();
		refresh();
	})	

	//判断是否全选了
	isAllChecked();
	function isAllChecked(){
		var arr = JSON.parse($.cookie("cart2"));
		
		var sum = 0;       //选中商品的数量
		for (var i=0; i<arr.length; i++) {
			sum += arr[i].checked;
		}
		
		//如果商品全部选中了
		if (sum == arr.length) {
			$(".allCheck").prop("checked", true); //全选
		}
		else {
			$(".allCheck").prop("checked", false); //不全选
		}		
	}
	
	//全选
	$(".allCheck").click(function(){
		var arr = JSON.parse($.cookie("cart2"));
		
		for (var i=0; i<arr.length; i++) {
			if ( $(".allCheck").prop("checked") ){
				arr[i].checked = true;
			}
			else {
				arr[i].checked = false;
			}
		}
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});
		
		refresh();
	})
	//清空购物车
	$(".bottom .emptycart").click(function(){
		$(".bottom-02 span").html("");
		$(".allCheck").prop("checked", false); //不全选
		$(".list").empty();
		var arr = JSON.parse($.cookie("cart2"));
		arr.splice(0,arr.length); //删除数组arr元素
		$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});
		
		refresh(); //刷新页面
	});
	

})
