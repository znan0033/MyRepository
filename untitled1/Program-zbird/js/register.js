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
	//鼠标移出snav，隐藏.
	$(".bottom-left>ul li:gt(0)").mouseleave(function(){$(".snav").css("display","none");});

//------------------------------------------------------------------------------------//
	//获取焦点清空输入框
	$(".registerform p input").focus(function(){
		var index = parseInt($(this).index("input")-1);			
		$(".registerform p input").eq(index-1).attr("placeholder","");		
	})
	//验证输入框不为空	
	$(".registerform p input:lt(4)").blur(function(){
		var index = parseInt($(this).index("input")-1);
		$(".registerform p input:lt(4)").eq(index-1).css("border","1px solid #fff");
		$(".registerform p span").eq(index-1).html("");	
		
		if($(".registerform p input:lt(4)").eq(index-1).val() == ""){
			$(".registerform p input:lt(4)").eq(index-1).css("border","1px solid red");
			if(index == 1){
				$(".registerform p span").eq(0).html("请输入用户名！");
			}
			if(index == 2){
				$(".registerform p span").eq(1).html("请输入密码！");
			}
			if(index == 3){
				$(".registerform p span").eq(2).html("确认密码不能为空！");
			}
			if(index == 4){
				$(".registerform p span").eq(3).html("请输入验证码！");
			}
		}
		else{
			if(index == 1){
				usname(index);
			}
			if(index == 2){
				psw(index);
			}
			if(index == 3){
				againpsw(index);
			}
			if(index == 4){
				yzm(index);
			}
			
		}
	})
	
	var flag1 = false; //表示用户名是否正确
	var flag2 = false; //表示密码是否正确
	var flag3 = false; //表示重复密码是否正确
	var flag4 = false; //表示验证码是否正确

		//用户名
		var value1 = "";
		function usname(index){
			value1 = $(".registerform p input:lt(4)").eq(index-1).val();
			var reg = /^[a-zA-Z_]\w{7,}$/;
			if (reg.test(value1)){
				$(".registerform p span").eq(0).html("");
				flag1 = true;
			}
			else {
				$(".registerform p span").eq(0).html("用户名格式错误！");
				flag1 = false;
			}
		}
		
		//密码	
		var value2 = "";
		function psw(index){
			value2 = $(".registerform p input:lt(4)").eq(index-1).val();
			var reg = /^.{6,20}$/;
			if (reg.test(value2)){
				$(".registerform p span").eq(1).html("");
				flag2 = true;																							
			}
			else {
				$(".registerform p span").eq(1).html("密码格式错误！");
				flag2 = false;
			}
		}
		
		//重复密码
		function againpsw(index){
			var value = $(".registerform p input:lt(4)").eq(index-1).val();
			if (value == value2){
				$(".registerform p span").eq(2).html("");
				flag3 = true;
			}
			else {
				$(".registerform p span").eq(2).html("密码输入不一致，请重新输入！");
				flag3 = false;
			}
		}
		
		//验证码
		function yzm(index){
			var value1 = $(".registerform p input:lt(4)").eq(index-1).val();
			var value2 = $(".nrandom").html();
			if (value1 == value2){
				$(".registerform p span").eq(3).html("");
				flag4 = true;
			}
			else {
				$(".registerform p span").eq(3).html("验证码错误！");
				flag4 = false;
			}
		}

	//默认选中状态
	var agree = $(".p3 input").prop("checked",true);
	//点击勾选/取消
	$(".p3 input").click(function(){
		if(agree){
			agree =false;
		}
		else{
			agree = true;
		}
	})
	
	//注册
	$(".p4 input").click(function(){				
		if(!agree){
			$(".registerform p span").eq(1).html("请勾选《钻石小鸟用户服务协议》！");			
		}
		else{
			if(flag1 && flag2 && flag3 && flag4){
				
				//获取数据
				$.post("http://127.0.0.1/untitled1/register.php",{
					username:value1,
					pwd:value2
				},function(result){
					var obj = JSON.parse(result);										
						alert(obj.msg)
						window.location.href = "register.html";
				})
			}
			else{	
				alert("输入有误，请重试");
			}	
		}
	})
	
	//初始验证码
	var str = "";
	for (var i=0; i<4; i++){
		str += parseInt(Math.random()*10);
	}
	$(".nrandom").html(str);
	//点击刷新验证码
	$(".nrandom").click(function(){	
		$(".nrandom").html("");
		var str2 = "";
		for (var i=0; i<4; i++){
			str2 += parseInt(Math.random()*10);
		}		
		$(".nrandom").html(str2);
	})
//------------------------------点击返回页面顶部  开始--------------------------------------------//	
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
//------------------------------点击返回页面顶部  结束--------------------------------------------//

//--------------------------------侧边悬浮二维码 开始----------------------------------------//
	//侧边悬浮二维码
	$("#leftcode .a2").hover(function(){
		$("#leftcode .saoma").css({display:"block"});		
	},
	function(){
		$("#leftcode .saoma").css("display","none");				
	})
//--------------------------------侧边悬浮二维码   结束------------------------------------------//

	
})
