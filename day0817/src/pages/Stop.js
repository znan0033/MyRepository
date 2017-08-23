import React, {Component} from 'react'

import StopServices from '../services/Services.js'

import '../css/stop.css'

let bannerSwiper = null;

export default class Stop extends Component{
	constructor(){
		super();
		this.state = {
			bannerData:[],
			navData:[],
			listData1:[],
			listData:[],
			ProductListData:[],
			page:1
		}
	}
	render(){
		return (
			<div id="Stop" class="page">
			{/*轮播图*/}
				<div class="swiper-container stop-banner">
				    <div class="swiper-wrapper">
				   		{ this.state.bannerData.map((item, index)=>{ return <div key={index} class="swiper-slide"><img src={item.imageSrc}/></div> }) }
				    </div>
				</div>
				<ul class="stop-nav">
					{ this.state.navData.map((item, index)=>{ return <li key={index}><img src={item.imageSrc}/><span>{item.name}</span></li> }) }
				</ul>
				<div class="stop-listData1">
					{ this.state.listData1.map((item,index)=>{ return <img src={item.imageSrc} key={index}/> }) }
				</div>
				<div class="stop-listData">
					{
						this.state.listData.map((item,index)=>{
							return (
								<div class="list" key={index}>
									<img src={item.imageSrc} class="img"/>
									<div>
										{
											item.products.map((item2,index2)=>{
												return (
													<div key={index2}>
														<img src={item2.image}/>
														<p>{item2.name}</p>
														<span>￥{(item2.price)/100+".00"}</span>
													</div>
													)
												})
										}
										<div><span>全部</span></div>
									</div>
								</div>
							)
						})
					}
					<p>— 好货精选 —</p>
				</div>
				<ul class="stop-product-list">
					{
						this.state.ProductListData.map((item,index)=>{
							return (
								<li key={index}>
									<img src={item.image}/>
									<p>{item.name}</p>
									<p>
										<b>{item.price}</b>
										<span>{item.num}</span>
									</p>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}


	componentWillMount(){
		//列表数据
		StopServices.getStopHeaderListData()
		.then((res)=>{
			this.setState({bannerData : res[0]});
			this.setState({navData : res[1]});
			this.setState({listData1 : res[2]});
			this.setState({listData : res[3]});

			//创建轮播图
			bannerSwiper = new Swiper(".swiper-container",{
				loop:true,
				autoplay: 4000,
				autoplayDisableOnInteraction:false
			});
			bannerSwiper.update();
			bannerSwiper.slideTo(1, 0);

		})

		StopServices.getProductListData(this.state.page)
		.then((res)=>{
//			console.log(res)
			this.setState({ProductListData:res})
		})

	}
}