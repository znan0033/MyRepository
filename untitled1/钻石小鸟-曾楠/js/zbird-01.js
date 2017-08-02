
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

//Ajax 获取数据
	$.get("js/zbirdjs.json",function(d){
		var arr1 = d.ul1;  //banner 轮播图
		var arr2 = d.ul2;  //main-1  轮播图
		var arr3 = d.ul3;  //main-3  戒指列表
		var arr4 = d.ul4;  //main-6  轮播图
		
		
//-----------------------------banner 区开始-------------------------------------//
		//创建banner轮播节点
		for(var i=0; i<arr1.length; i++){
			var a1 = $("<li><img src="+ arr1[i].img +"/></li>");
			$(".lunbo1").append(a1);
			var a2 = $("<li></li>");
			$(".lunbo2").append(a2);
			$(".lunbo2 li").eq(0).addClass("on");					
		}				
		//banner轮播效果
		var j = 0;
		var size = $(".lunbo1 li").size();
		var timer =  setInterval(function(){						
			j++;
			if(j>=size){j=0};
			lunbo(j);
		},4000);
		function lunbo(j){					
			$(".bannerimg").stop().animate({opacity: 0},500)
			$(".lunbo1 li").eq(j).stop().animate({opacity: 1},500).siblings().stop().animate({opacity: 0},500);
			$(".lunbo2 li").eq(j).addClass("on").siblings().removeClass("on");				
		}
        //轮播圆点事件
        //移入显示对应图片
		$(".lunbo2 li").mouseenter(function(){ 
			var index = $(this).index() 
			//改变li的选中状态
			$(".lunbo2 li").addClass("on").siblings().removeClass("on");
				lunbo(index);
       });	
       //移出li
       	var jj=0;
		$(".lunbo2 li").mouseleave(function(){ 				
			var index = $(this).index();
				jj = index;  //移出li圆点时的下标
        });	
		
		//鼠标移入banner暂停轮播
		$(".banner").mouseover(function(){ 
			clearInterval(timer); 
			$(".prev").css("display","block");
			$(".next").css("display","block");
		});
       
		//鼠标移出banner开始轮播
		$(".banner").mouseleave(function(){
			$(".prev").css("display","none");
			$(".next").css("display","none");
			
			timer = setInterval(function(){
				jj++;
				if(jj>=size){jj=0};
				lunbo(jj);
			}, 4000);						
		});	        	
       
        //左右箭头事件
		$(".prev").click(function(){      //上一页
			j--;
			lunbo(j);
		});
		$(".next").click(function(){      //下一页
			j++;
			lunbo(j);
		});
//---------------------------------banner 区结束-----------------------------------------///   	


//-------------------------------主体 main-1 开始------------------------------------------//
    	//main-1 轮播图
		for(var k=0; k<arr2.length; k++){
			var a3 = $("<div></div>");
			$(".diybox").append(a3);
			$(".diybox div").eq(k).css("background","url("+ arr2[k].img +") no-repeat");
		}				
		//main-1轮播效果
		var j2 = 0;
		var m1size = $(".diybox div").size();
		var timer2 =  setInterval(function(){						
			k++;
			if(k>=m1size){k=0};
			lunbo2(k);
		},3000);
		function lunbo2(k){					
			$(".diybox div").eq(k).stop().animate({opacity: 1},500).siblings().stop().animate({opacity: 0},500);				
		}
		
//-------------------------------主体 main-1 结束------------------------------------------//

//-------------------------------主体 main-3 开始------------------------------------------//
		//main=3 戒指展示
		for(var i=0; i<arr3.length; i++){
			
			var lii = $("<li><img src="+ arr3[i].img+"/></li>");
			$(".main-3-list ul").append(lii);
			$(".main-3-list li").eq(i).hover(function(){
				var index = $(this).index();
				$(".main-3-list li").eq(index).stop().animate({marginTop:-12},300);
				$(".main-3-list li").eq(index).fadeTo(100,0.85,function(){
					$(".main-3-list li").eq(index).fadeTo(100,1);					
				});
			},
			function(){
				var index = $(this).index();
				$(".main-3-list li").eq(index).animate({marginTop:0},300);				
			});			
		
		}

		$(".main-3-list li").click(function(){
			var index = $(this).index();
			console.log(index.id);
			location.href = "detail.html?id="+101;
		})
			

		//左箭头  ，左滚动
		$(".list-left").on("click",
			function(){
				var liw =$(".main-3-list ul").position().left; 
				var lill = $(".main-3-list li").eq(0).outerWidth();
				var lill2 = $(".main-3-list li").size();
				var aa = parseInt(lill*(lill2/2));			
				
				if(liw == 0){liw = 0;}
				else{$(".main-3-list ul").animate({left:liw+274});}
				if(liw == 0){$(".list-left").css({backgroundPosition:"right top"});}
				else{$(".list-right").css({backgroundPosition:"left bottom"});}
		})
		//右箭头   ,右滚动
		$(".list-right").on("click",
			function(){
				var liw =$(".main-3-list ul").position().left; 
				var lill = $(".main-3-list li").eq(0).outerWidth();
				var lill2 = $(".main-3-list li").size();
				var aa = parseInt(lill*(lill2/2));			
				if(liw == -aa){ liw = -aa; }
				else{ $(".main-3-list ul").animate({left:liw-274},200); }
				if(liw == -aa){
					$(".list-right").css({backgroundPosition:"right bottom"});
					$(".list-left").css({backgroundPosition:"left top"});					
				}
				else{ $(".list-left").css({backgroundPosition:"left top"});	}
		});
//-------------------------------主体 main-3 结束------------------------------------------//

//-------------------------------主体 main-6 开始------------------------------------------//

	//轮播图
	for(var i=0; i<arr4.length; i++){
		var li = $("<li><img src="+ arr4[i].img +"/></li>")      //创建图片节点
		$(".citylist").append(li);
		
		var li2 = $("<li></li>")          //创建小圆点节点
		$(".citylist2").append(li2);
	}
		$(".citylist li").eq(0).clone(true).appendTo($(".citylist"));		//克隆第一张图放到最后
		var lisize = $(".citylist li").size();      //当前li节点个数		
		var liwidth = $(".citylist li").eq(0).outerWidth();		//li节点宽度
		$(".citylist").outerWidth(parseInt(lisize*liwidth));   //ul宽度，所有li节点宽度总和
		$(".citylist2").css({marginLeft:-($(".citylist2").outerWidth()/2)});   //小圆点位置
		$(".citylist2 li").eq(0).css({opacity: 1});  //默认选中第一个小圆点
		//开启定时器
		var m6 = 0;
		var timer2 = setInterval(function(){
			m6++;
			main6();
		},4000)
		//运动
		function main6(){
			if (m6 < 0){
				$(".citylist").css("left", -liwidth*(lisize-1));
				m6 = lisize-2;
			}
			if (m6 >= lisize){
				$(".citylist").css("left", 0);
				m6 = 1;
			}			
			$(".citylist").stop().animate({left:-m6*liwidth},200);  //图片运动			
			$(".citylist2 li").eq(m6%(lisize-1)).css({opacity: 1}).siblings().css({opacity: 0.5});   //小圆点运动
		}		

		//鼠标滑入小圆点显示对应图片
		$(".citylist2 li").mouseenter(function(){
			m6 = $(this).index();
			main6();
		})
		//鼠标滑入/滑出
		$(".city-left").mouseenter(function(){ clearInterval(timer2);}); //鼠标滑入停止轮播
		$(".city-left").mouseleave(function(){                           //鼠标滑出开始轮播
			 timer2 = setInterval(function(){
				m6++;
				main6();
			},4000);	
		});
//-------------------------------主体 main-6 结束------------------------------------------//
		
		
	});
//------------------------------- Ajax 结束--------------------------------------------//
		
		//main-1 
		//鼠标滑入闪耀效果
		$(".diyshow2").mouseenter(function(){
			$(".diyshow2").fadeTo(100,0.85,function(){
				$(".diyshow2").fadeTo(100,1);				
			});
			$(".diyshow2").click(function(){
				location.href = "detail.html?id="+101;
			})
		})

//-----------------------------主体 main-2 开始-------------------------------------------//				
		//main-2
		$(".main-2-img").css("display", "none");
		$(".main-2-img").eq(0).css("display", "block"); //默认显示第一个
		$(".main-2-nav li").eq(0).css("color","#000");  //默认第一个li颜色为黑色
		
		var m2i = 0;
		var m2size = $(".main-2-img").size();
 		var timer = setInterval(function(){
 			m2i++;
 			if(m2i>=m2size){m2i=0};
 			m2lunbo(m2i);
 		},3000)
		//轮播
		function m2lunbo(m2i){			
			$(".main-2-img").eq(m2i).css("display","block").siblings("div").css("display", "none");			
			$(".main-2-nav li").eq(m2i).css("color","#000").siblings("li").css("color","#fff");					
		}
		//鼠标移入导航显示对应页并停止轮播
		$(".main-2-nav li").mouseenter(function(){
			clearInterval(timer);
			var i = $(this).index();
			$(".main-2-img").eq(i).css("display","block").siblings("div").css("display", "none");
			$(".main-2-nav li").eq(i).css("color","#000").siblings("li").css("color","#fff");		
		})
		//鼠标移出导航重开定时器
		$(".main-2-nav li").mouseleave(function(){
			var index = $(this).index();
			var m2i = index;
			timer = setInterval(function(){				
				m2i++;
 				if(m2i>=m2size){m2i=0};
 				m2lunbo(m2i);
			},3000)			
		});
		
		$(".main-2-img").hover(function(){    //鼠标移入图片暂停轮播
			clearInterval(timer);			
		},
		function(){
			timer = setInterval(function(){  //鼠标移出图片开始轮播
				m2i++;
 				if(m2i>=m2size){m2i=0};
 				m2lunbo(m2i);
			},3000)			
		})
		$(".main-2-img a").click(function(){
			
			var aa = Math.random();
			console.log(aa);
			if(aa >= 0 && aa <= 0.3){
				location.href = "detail.html?id="+102;
			}
			else if(aa > 0.3 && aa<= 0.6){
				location.href = "detail.html?id="+103;				
			}
			else{
				location.href = "detail.html?id="+104;				
			}
		})
//-----------------------------主体 main-2 结束-------------------------------------------//				
	
//-----------------------------主体 main-5 开始--------------------------------------------//
	//鼠标滑入闪耀效果
		$(".main-5 img").mouseenter(function(){
				var index = $(this).index();
			$(".main-5 img").eq(index).fadeTo(100,0.85,function(){
				$(".main-5 img").eq(index).fadeTo(100,1);				
			});
		})

//-----------------------------主体 main-5 结束--------------------------------------------//


//-----------------------------主体 main-6 开始--------------------------------------------//

	//鼠标滑入导航显示对应地址
		$(".tab-place a").mouseenter(function(){
				var index = $(this).index();
			$(".tab-place a").eq(index).addClass("a_on").siblings().removeClass();
			$(".a_city").eq(index).css("display","block").siblings("div").css("display","none");
		});
	

//-----------------------------主体 main-6 结束--------------------------------------------//


//-----------------------------主体 main-7 开始--------------------------------------------//
	//轮播图
		var imgsize = $(".news3img img").size();      //当前li节点个数
		var imgwidth = $(".news3img img").eq(0).outerWidth();//图片宽度
		$(".news3img").outerWidth(parseInt(imgsize*imgwidth));   //所有图片宽度总和
		$(".news3img2").css({marginLeft:-($(".news3img2").outerWidth()/2)});   //小圆点位置
		$(".news3img2 span").eq(0).css({background: "#ff8a81"});  //默认选中第一个小圆点
		//开启定时器
		var m7 = 0;
		var timer3 = setInterval(function(){
			m7++;
			main7();
		},4000)
		//运动
		function main7(){
			if (m7 < 0){
				$(".news3img").css("left", -imgwidth*(lisize-1));
				m7 = imgsize-2;
			}
			if (m7 >= imgsize){
				$(".news3img").css("left", 0);
				m7 = 1;
			}			
			$(".news3img").stop().animate({left:-m7*imgwidth},200);  //图片运动			
			$(".news3img2 span").eq(m7%(imgsize-1)).css({background: "#ff8a81",opacity: 1}).siblings().css({background: "#000",opacity: 0.5});   //小圆点运动
		}		

		//鼠标滑入小圆点显示对应图片
		$(".news3img2 span").on("mouseenter",function(){
			m7 = $(this).index();
			main7();
		})
		//鼠标滑入/滑出
		$(".news3").mouseenter(function(){ clearInterval(timer3);}); //鼠标滑入停止轮播
		$(".news3").mouseleave(function(){                           //鼠标滑出开始轮播
			 timer3 = setInterval(function(){
				m7++;
				main7();
			},4000);	
		});
//-----------------------------主体 main-7 结束--------------------------------------------//


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














