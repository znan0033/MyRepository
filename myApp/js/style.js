
 $(function(){
	 	
	 	//监听屏幕宽度发变化，和横竖屏变化，重新这是html的fontsize
	function getRootFontSize(){
		var root = document.documentElement;
		var clientWidth = root.clientWidth;
		root.style.fontSize = clientWidth*100/750+'px';
	}
	window.addEventListener('orientationchange', getRootFontSize);
	window.addEventListener('resize', getRootFontSize);
	getRootFontSize();
 	
	//Initialize Swiper 
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

 	
 	
 	//创建滚动视图

	var myScroll = new IScroll('#content', {
		bounce: true,
		startY: -50,
		probeType: 3
	});
	myScroll.refresh();
	var color = 0;
	myScroll.on('scroll', function(){
		

		if(myScroll.y < -60 && color < 1){
 			color +=0.05;
 			if(color >=1){
 				color = 1;
 			}
		}
    	 else if(myScroll.y > -60 && color > 0){
 			color -=0.05;
			if(color <= 0){
 				color = 0;
 			}
      }
		$("#header").css("background","rgba(6,193,174,"+color+")")
		
		
		//当能够触发下拉刷新时,让箭头换向
		if(myScroll.y >= 0){
			document.querySelector('.loding img').className = 'up';
			document.querySelector('#header').style.display = 'none';
		}else{
			document.querySelector('.loding img').className = '  ';
			document.querySelector('#header').style.display = 'block';
		}
		
		//
		var disY = myScroll.y - myScroll.maxScrollY;
		if(disY <= 0){
			document.querySelector('.loding2 img').className = 'down';
		}else if(disY > 0 && disY < 50){
			document.querySelector('.loding2 img').className = '';
		}
	})
	
	

	myScroll.on('scrollEnd', function(){
				
		
		//判断松手滚动停止后,是否触发下拉刷新
		if(myScroll.y < 0 && myScroll.y > -50){
			//没有触发下拉刷新,回到-50的位置
			myScroll.scrollTo(0, -50, 300);
			document.querySelector('.loding img').style.display = 'block';
		}
		else if(myScroll.y == 0){
			//触发了下拉刷新,需要更换指示图片
			//更换图片
			document.querySelector('.loding img').src = 'img/loding.gif';
			//发送请求,执行刷新
			var listHtml = '';
			time =  setTimeout(function(){
				$.ajax({
					type:"get",
					url:"meituan.json", 
					async:false,
					success: function(obj){
						for(var i=0; i<obj.length; i++){
							listHtml += `
								<li>
									<img src="${obj[i].url}"/>
									<p class="Itemsname">${obj[i].name}</p>
									<p class="Itemsxq">${obj[i].xiangqing}</p>
									<p class="Itemsprice">
										<strong>${obj[i].price1}</strong>
										<span>${obj[i].price2}</span>
										<i>${obj[i].number}</i>
									</p>
								</li>												
							`;
						}
						document.querySelector('.Items').innerHTML = listHtml;
						endRefresh();
					}
				});		
			}, 1000);
		}
		
		
		//判断松手滚动停止后,是否触发上拉加载更多
		var disY = myScroll.y - myScroll.maxScrollY;
		if(disY <= 0){
			//触发了
			document.querySelector('.loding2 img').src = 'img/loding.gif';
			//加载更多请求下一页数据,

			time =  setTimeout(function(){
				$.ajax({
					type:"get",
					url:"meituan.json",
					async:false,
					success: function(obj){
						for(var i=0; i<obj.length; i++){
							document.querySelector('.Items').innerHTML += `
								<li>
									<img src="${obj[i].url}"/>
									<p class="Itemsname">${obj[i].name}</p>
									<p class="Itemsxq">${obj[i].xiangqing}</p>
									<p class="Itemsprice">
										<strong>${obj[i].price1}</strong>
										<span>${obj[i].price2}</span>
										<i>${obj[i].number}</i>
									</p>
								</li>												
							`;
						}
						endLoadMore();
					}
				})
			}, 1000);
		
		}
		else if(disY > 0 && disY <50){
			//没有触发,回到原来位置
			myScroll.scrollTo(0, myScroll.maxScrollY + 50, 300);
		}
		
	})
	
		//停止下拉刷新的方法
	function endRefresh(){
		document.querySelector('.loding img').src = 'img/arrow.png';
		myScroll.scrollTo(0, -50, 300);
		document.querySelector('#header').style.display = 'block';

		myScroll.refresh();
		
	}
	
	//停止上拉加载更多的方法
	function endLoadMore(){
		document.querySelector('.loding2 img').src = 'img/arrow.png';
		myScroll.scrollTo(0, myScroll.maxScrollY + 50, 300);

		myScroll.refresh();		
	}
	
	
	
	
	
	
	//底部 footer 切换
	$("#footer a").click(function(){
		
		var index = $(this).index();
		$("#footer a").eq(index).addClass("active").siblings().removeClass();
		
	})
	
	
	
	
	
	
	
	
	
	
	
})