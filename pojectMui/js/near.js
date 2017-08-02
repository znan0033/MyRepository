$(function(){
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
								setTimeout(function(){
				      				mui('#refreshContainer').pullRefresh().endPulldownToRefresh();								
								},1000)
			      	} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		    	},
		    //上拉加载的配置
			    up : {
			      height:50,//可选.默认50.触发上拉加载拖动距离
			      auto:false,//可选,默认false.自动上拉加载一次
			      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
			      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
			      callback :function(){
							setTimeout(function(){									
								mui('#refreshContainer').pullRefresh().endPullupToRefresh();
							},100)
			      } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			    }
			}
	});
	
	mui.plusReady(function (){
		
	    	mui('#item1').on('tap', '.item-title-table', function(){
				var index = $(this).index()
				$('#item1 .item-title-table').eq(index).addClass('item-active').siblings().removeClass('item-active');
	    	})
	    	mui('#item2').on('tap', '.item-title-table', function(){
				var index = $(this).index()
				$('#item2 .item-title-table').eq(index).addClass('item-active').siblings().removeClass('item-active');
	    	})
	    	mui('#item3').on('tap', '.item-title-table', function(){
				var index = $(this).index()
				$('#item3 .item-title-table').eq(index).addClass('item-active').siblings().removeClass('item-active');
	    	})
	    	mui('#item4').on('tap', '.item-title-table', function(){
				var index = $(this).index()
				$(' #item4 .item-title-table').eq(index).addClass('item-active').siblings().removeClass('item-active');
	    	})
    		    
	})
})
