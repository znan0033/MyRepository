
//详情页


$(function(){
	
	//实时改变body宽高
	$(window).resize(function() {
        var W = $(window).width();
        if(W < 1180){
       		W = 1180;
       		$("body").width(W);
        }else{
       		$("body").width(W);
        }
	}); 	

//------------------------------------------------------------------------------------//
		//头部snav 下拉菜单	
	$(".bottom-left>ul li:gt(0)").mouseenter(function(){     //鼠标滑入显示下拉菜单
		
		$(".snav").css("display","block");  
		$(".snav").mouseenter(function(){$(".snav").css("display","block");});
		$(".snav").mouseleave(function(){$(".snav").css("display","none");});
		//滑入当前li对应显示的页面
		$(".snav > div").eq(($(this).index())-1).css("display","block").siblings().css("display","none");
	});
	//鼠标移出snav，隐藏
	$(".bottom-left>ul li:gt(0)").mouseleave(function(){$(".snav").css("display","none");});
//------------------------------------------------------------------------------------//
	
//------------------------------------------------------------------------------------//
	
	//获取商品id的值
	var pid = location.search.substring(4);
	//全局变量
	var myArr = [];
	//获取数据
	$.ajax({
		type:"get",
		url:"js/zbirdjs2.json",
		async:false,
		success: function(d){
			for(var i=0;i<d.length; i++){
				var obj = d[i];
				if (obj.id == pid) {
					//obj:此时的obj就是我们需要的商品
					fn(obj);
					myArr = obj;
				}
			}		
		}
	});
	
	function fn(obj){
		
		//创建大图
		var arr1 = obj.big;
		for(var j=0; j<arr1.length; j++){
			var img3 = $("<img src="+arr1[j].img+"/>");
			$(".left2").append(img3);
		}
		//创建中图
		var arr2 = obj.middle;  
		for(var k=0; k<arr2.length; k++){
			var img2 = $("<img src="+arr2[k].img+"/>");
			$(".left1 span").after(img2);
		}
		var arr3 = obj.small;  
		//创建小图
		for(var i=0; i<arr3.length; i++){
			var img1 = $("<img src="+arr3[i].img+"/>");
			$(".left3-prev").after(img1);
		}
		
		$(".left2 img").eq(0).css("display","block");   //默认显示第一张大图
		$(".left1 img").eq(0).css("opacity",1);   //默认显示第一张中图
		$(".left3 img").eq(0).addClass("img_on");   //默认选中第一张小图
		$(".left3 img").mouseenter(function(){      //根据选中小图 显示对应大图
			var index = $(this).index();
			$(".left3 img").eq(index-1).addClass("img_on").siblings("img").removeClass();
			$(".left1 img").eq(index-1).css("opacity",1).siblings("img").css("opacity",0);
			$(".left2 img").eq(index-1).css("display","block").siblings("img").css("display","none");
		});			
		//商品名称
		$(".main-1-right p").html(obj.name);
		$(".title span").html(obj.name);
		//商品价格
		$(".main-1-right span").html(obj.unit+""+obj.price);
	}

	//放大镜效果
	
	//鼠标移入显示
	$(".left1").hover(function(e){      
		$(".left1 span").css("display","block");//鼠标滑入显示
		$(".left2").css("display","block");
		$(".left1").mousemove(function(e){
			var x = e.pageX  - $(".left1").offset().left - $(".left1 span").outerWidth()/2;
			var y = e.pageY  - $(".left1").offset().top - $(".left1 span").outerHeight()/2;
			
			if (x <= 0) { //控制不超出左边界
				x = 0 +"px";
			}
			else if (x >= $(".left1").outerWidth()-$(".left1 span").outerWidth()){ //右边界
				x = $(".left1").outerHeight()-$(".left1 span").outerHeight()+"px";
			}
			if (y <= 0)  { //上边界
				y = 0 +"px";
			}
			else if (y >= $(".left1").outerWidth()-$(".left1 span").outerWidth()){ //下边界
				y = $(".left1").outerHeight()-$(".left1 span").outerHeight()+"px";
			}
			//移动小图
			$(".left1 span").css("left",x);
			$(".left1 span").css("top",y);
			//显示对应大图
			$(".left2 img").css("left",-x*2);
			$(".left2 img").css("top",-y*2);
		})
	},function(){                                    //鼠标滑出图片
		$(".left1 span").css("display","none");
		$(".left2").css("display","none");
		
	})
	
//------------------------------------------------------------------------------------//
	//点击加入购物车
	
	$(".main-1-right .but").click(function(e){
		e.stopPropagation(); //阻止冒泡
			
			//获取到要加入购物车的商品数据
			var obj = myArr;

			var arr = $.cookie("cart2") ? JSON.parse($.cookie("cart2")) : [];
			var isExist = false; //表示是否存在相同商品
			for (var i=0; i<arr.length; i++) {
				if (arr[i].id == obj.id) {
					arr[i].num++; //数量+1
					isExist = true; //表示存在相同商品
				}
			}
			//如果不存在相同商品， 则添加该商品
			if (isExist == false) {
				obj.num = 1;
				obj.checked = true; //默认是选中的
				arr.push(obj);
			}			
			//使用$.cookie保存数据
			$.cookie("cart2", JSON.stringify(arr), {expires:30, path:"/"});		
			location.href = "mycart.html";
	
	})
	
	
//------------------------------------------------------------------------------------//
	//点击返回页面顶部
	$(window).scroll(function(){
		var H = $(window).scrollTop();
		if(H>=600){
			$("#totop").css("display","block").click(function(){
				$(window).scrollTop(0);
			});			
		}
		else{
			$("#totop").css("display","none");			
		}
	});
//------------------------------------------------------------------------------------//
	
//------------------------------------------------------------------------------------//
	//侧边悬浮二维码
	$("#leftcode .a2").hover(function(){
		$("#leftcode .saoma").css({display:"block"});		
	},
	function(){
		$("#leftcode .saoma").css("display","none");				
	})
	
})
