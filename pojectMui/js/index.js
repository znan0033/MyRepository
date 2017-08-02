 onload = function(){

 	//监听屏幕宽度发变化，和横竖屏变化，重新这是html的fontsize
	function getRootFontSize(){
		var root = document.documentElement;
		var clientWidth = root.clientWidth;
		root.style.fontSize = clientWidth*100/750+'px';
	}
	window.addEventListener('orientationchange', getRootFontSize);
	window.addEventListener('resize', getRootFontSize);
	getRootFontSize();

	//初始化
  	mui.init({
		subpages: [
			{
				url: 'near/near.html',
				id: 'near',
				styles: {
					top: 0,
					bottom: "50px"
				}
			},
			{
				url: 'gyg/gyg.html',
				id: 'gyg',
				styles: {
					top: 0,
					bottom: "50px"
				}
			},
			{
				url: 'orders/orders.html',
				id: 'orders',
				styles: {
					top: 0,
					bottom: "50px"
				}
			},
			{
				url: 'Me/Me.html',
				id: 'Me',
				styles: {
					top: 0,
					bottom: "50px"
				}
			},
			{
				url: 'home/home.html',
				id: 'home',
				styles: {
					top: 0,
					bottom: "50px"
				}
			}

		]
	});


	mui.ready(function () {

    	mui('.mui-bar-tab').on('tap', '.mui-tab-item', function(){
    		var id = this.id;
    		//动画不能实现
    		plus.webview.show(id, 'slide-in-right', 1000, function(){ });
    	})

	})

 }
