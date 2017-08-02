$(function(){

		//Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

  	mui.init({
			pullRefresh : {
		    	container:"#refreshContainer",//刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
		    //下拉刷新的配置
		    	down : {
			    	height:50,//可选,默认50.触发下拉刷新拖动距离,
			    	auto: false,//可选,默认false.首次加载自动下拉刷新一次
			      	contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
			      	contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
			      	contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
			      	callback :function(){
			      		document.querySelector("#header").style.display = 'none';
			      		mui.ajax('../meituan.json',{
			      			dataType:'json',//服务器返回json格式数据
			      			type:'get',//HTTP请求类型
			      			timeout:10000,//超时时间设置为10秒；
			      			success:function(data){
			      				//清空商品列表
								document.querySelector("#main3-list").innerHTML ="";
								//创建商品节点
								for(var i=0; i<data.length; i++){
									var li =$("<li class='mui-table-view-cell mui-media'></li>").appendTo("#main3-list");
									var a =	$("<a href='javascript:;'></a>").appendTo(li);
	    	            					$("<img class='mui-media-object mui-pull-left' src="+data[i].url+">").appendTo(a);
									var div = $("<div class='mui-media-body'></div>").appendTo(a);
											$("<span>"+data[i].name+"</span>").appendTo(div);
											$("<p class='mui-ellipsis'>"+data[i].xiangqing+"</p>").appendTo(div);
									var p = $("<p class='Itemsprice'></p>").appendTo(div);
											$("<strong>"+data[i].price1+"</strong>").appendTo(p);
											$("<span>"+data[i].price2+"</span>").appendTo(p);
											$("<i>"+data[i].num+"</i>").appendTo(p);
								}
								setTimeout(function(){
						      		document.querySelector('#header').style.display = "block";
				      				mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
								},1000)
			      			},
			      			error:function(xhr,type,errorThrown){
									mui.alert('请求超时，请重试','确定')
					      		document.querySelector("#header").style.display = 'block';
			      				mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
			      			}
			      		});
			      	} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		    	},
		    //上拉加载的配置
			    up : {
			      height:50,//可选.默认50.触发上拉加载拖动距离
			      auto:false,//可选,默认false.自动上拉加载一次
			      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
			      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
			      callback :function(){
					mui.ajax('../meituan.json',{
						dataType:'json',//服务器返回json格式数据
						type:'get',//HTTP请求类型
						timeout:10000,//超时时间设置为10秒；
						success:function(data){
							setTimeout(function(){
							//创建商品节点
							for(var i=0; i<data.length; i++){
								var li =$("<li class='mui-table-view-cell mui-media'></li>").appendTo("#main3-list");
								var a =	$("<a href='javascript:;'></a>").appendTo(li);
		            					$("<img class='mui-media-object mui-pull-left' src="+data[i].url+">").appendTo(a);
								var div = $("<div class='mui-media-body'></div>").appendTo(a);
										$("<span>"+data[i].name+"</span>").appendTo(div);
										$("<p class='mui-ellipsis'>"+data[i].xiangqing+"</p>").appendTo(div);
								var p = $("<p class='Itemsprice'></p>").appendTo(div);
										$("<strong>"+data[i].price1+"</strong>").appendTo(p);
										$("<span>"+data[i].price2+"</span>").appendTo(p);
										$("<i>"+data[i].num+"</i>").appendTo(p);
							}
								mui('#refreshContainer').pullRefresh().endPullupToRefresh();
							},100)

						},
						error:function(xhr,type,errorThrown){
							mui.alert('请求超时，请重试','确定')
							mui('#refreshContainer').pullRefresh().endPullupToRefresh();
						}
					});
			      } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			    }
			}
		}

  	);
})