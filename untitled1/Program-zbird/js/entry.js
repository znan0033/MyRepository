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
	//获取cookie数据
	var arr = $.cookie("usename");
	if (arr) {
		arr = JSON.parse(arr); //JSON解析
		$(".p1 input").val(arr[0]);
		$(".p2 input").val(arr[1]);
	}


	
	//获取焦点清空输入框
	$(".registerform p input").focus(function(){
		var index = parseInt($(this).index("input")-1);			
		$(".registerform p input").eq(index-1).attr("placeholder","");		
	})
	
	
	var flag1 = false; //表示用户名是否正确
	var flag2 = false; //表示密码是否正确
	
	$(".registerform p input:lt(3)").blur(function(){
		var index = parseInt($(this).index("input")-1);						
		if($(".registerform p input:lt(3)").eq(index-1).val() == ""){
			if(index == 1){
				$(".registerform p input").eq(index-1).attr("placeholder","请输入用户名");					
			}
			if(index == 2){
				$(".registerform p input").eq(index-1).attr("placeholder","请输入密码");					
			}
		}
		else{
			if(index == 1){
				flag1 = true;					
			}
			if(index == 2){
				flag2 = true;					
			}			
		}
	})
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
	
	//登录
	$(".p4 input").click(function(){
		//自动登录
		if(agree){
			var arr = $.cookie("usename") ? JSON.parse($.cookie("usename")) : [];
				arr.push($(".p1 input").val(),$(".p2 input").val());
			$.cookie("usename", JSON.stringify(arr), {expires:30, path:"/"});
		}
		//验证用户名和密码
		if(flag1 && flag2){		
			//获取数据
			$.post("http://127.0.0.1/untitled1/entry.php",{
				username:$(".p1 input").val(),
				pwd:$(".p2 input").val()
			},function(result){
				var obj = JSON.parse(result);
				if(obj.status == 1){       //登录成功跳转到首页
					alert(obj.msg)
					window.location.href = "index_zbird.html";
				}
				else{                     //登录失败刷新页面
					alert(obj.msg)
					window.location.href = "entry.html";						
				}
			})

		}
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
