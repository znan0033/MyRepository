import React, {Component} from 'react'
import homeService from '../services/homeServices.js'
import {Link} from 'react-router-dom'
import '../css/home.css'
import store from '../store'

let bannerSwiper = null;

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData: [],
			listData1:[],
			listData2:[],
			time: new Date().getTime()

		}
	}


	render(){
		return (
			<div id="home" class="page">
				<div ref="banner" class="swiper-container home-banner">
					<div class="swiper-wrapper">
						{
							this.state.bannerData.map((item,index)=>{
								return (
									<div key={index} class="swiper-slide">
										<img src={item.img}/>
									</div>
								)
							})
						}
					</div>
				</div>
				<div class="home-list">
					<ul>
						{
							this.state.listData1.map((item,index)=>{
								return(
									<li key={index} onClick={this.goPage.bind(this,item)}>
										<Link to={"/Movies-details/" + item.id}>
											<img src={item.cover.origin}/>
											<div>
												<p>{item.name}</p>
												<b>{item.grade}</b>
												<span>{item.cinemaCount}家影院上映{item.watchCount}人购票</span>
											</div>
										</Link>
									</li>
								)
							})
						}
					</ul>
					<div class="home-list-more">更多热映电影</div>
					<hr/>
					<div class="home-list-coming">即将上映</div>
					<ul>
						{
							this.state.listData2.map((item,index)=>{
								return(
									<li key={index} onClick={this.goPage.bind(this,item)}>
										<Link to={"/Movies-details/" + item.id}>
											<img src={item.cover.origin}/>
											<div>
												<p>{item.name}</p>
												<b>{item.grade}</b>
												<span>{item.cinemaCount}家影院上映{item.watchCount}人购票</span>
											</div>
										</Link>
									</li>
								)
							})
						}
					</ul>
					<div class="home-list-more">更多即将上映电影</div>
				</div>
			</div>
		)
	}

	goPage(item){

//		console.log('changename'+item.name)

		store.dispatch({
			//事件名字
			type: 'changename',
			//参数
			val: item.name
		});
	}

	componentWillMount(){
		//请求轮播图数据
		homeService.getHomeBanner()
		.then((data)=>{
			this.setState({bannerData: data})

			bannerSwiper = new Swiper(".swiper-container",{
				loop:true,
				autoplay: 4000,
				autoplayDisableOnInteraction:false
			});
			bannerSwiper.update();
			bannerSwiper.slideTo(1, 0);

		})

		//home 列表数据
		homeService.getHomeNowplay(this.state.time)
		.then((res)=>{
//			console.log(res);
			this.setState({listData1 : res})
		})
		homeService.getHomeComingSoon()
		.then((res)=>{
			this.setState({listData2 : res})
		})


	}





}