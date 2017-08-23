import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moviesServices from '../services/Services.js'

import '../css/movies.css'

let contentScroll = null;
let num = 1;
export default class Movies extends Component{
	constructor(){
		super();
		this.state = {
			listData:[],
			listData2:[],
			page:1,
			show:true
		}
	}

	render(){

		let ShowStyle = { display: this.state.show ?  "block"  :"none" }
		let Show2Style = { display: this.state.show ?  "none"  :"block" }

		let pnow = this.state.show ? 'active' : ''
		let pcoming = this.state.show ? '' : 'active'
		let lis1 = []
		this.state.listData.map((item,index)=>{
			lis1.push(
				<li key={index}>
					<Link to={"/Movies-details/" + item.id}>
						<div class="img"><img src={item.img}/></div>
						<p><span>{item.name}</span><b>{item.grade}</b></p>
						<p>{item.intro}</p>
						<p><span>{item.cinemaCount}</span>家影院上映<span>{item.watchCount}</span>人购票</p>
					</Link>
				</li>
			)
		})
		let lis2 = []
		this.state.listData2.map((item,index)=>{
			lis2.push(
				<li key={index}>
					<Link to={"/Movies-details/" + item.id}>
						<div class="img"><img src={item.img}/></div>
						<p><span>{item.name}</span></p>
						<p>{item.intro}</p>
						<p><span>{item.premiereAt}</span><span>{item.premiereAt2}</span></p>
					</Link>
				</li>
			)
		})

		return (
			<div id="Movies" class="page">
				<div class="wrapper">
					<div class="movies-title">
						<p onClick={this.show.bind(this,'1')} class={pnow}>正在热映</p>
						<p onClick={this.show.bind(this,'2')} class={pcoming}>即将上映</p>
					</div>
					<ul class="now-play movies-list" style={ShowStyle}>
						{lis1}
					</ul>
					<ul class="coming-soon movies-list" style={Show2Style}>
						{lis2}
					</ul>
				</div>
			</div>
		)
	}
	show(val){
		num = 1;
		this.setState({page: 1 })
		if(val == "1"){
			this.setState({show : true});

			//正在热映电影列表数据
			moviesServices.getMoviesNowPlayingData( this.state.page)
			.then((res)=>{
				this.setState({listData : res});
			})
		}

		if(val == "2"){
			this.setState({show : false});

			//即将上映电影列表数据
			moviesServices.getMoviesComingSoonData( this.state.page)
			.then((res)=>{
				this.setState({listData2 : res});
			})
		}

	}

	componentWillMount(){
		//正在热映电影列表数据
		moviesServices.getMoviesNowPlayingData( this.state.page)
		.then((res)=>{
			this.setState({listData : res});
		})
		//即将上映电影列表数据
		moviesServices.getMoviesComingSoonData( this.state.page)
		.then((res)=>{
			this.setState({listData2 : res});

		})

	}

	componentDidMount(){
		//创建滚动视图
		contentScroll = new IScroll("#Movies",{
			probeType:3,
			bounce: false
		})
		contentScroll.on("scroll",()=>{
		var y =contentScroll.y-518;
			if( y<=((-920+125)*num) && y>= -920*num ){
				num += 1;
				this.setState({page: this.state.page+1});
			// 重新请求数据
				if(this.state.show){
					//正在热映电影列表数据
					moviesServices.getMoviesNowPlayingData( this.state.page)
					.then((res)=>{
						res.map((item)=>{this.state.listData.push(item)});
						this.setState({listData : this.state.listData});
					})
				}
				else{
					//即将上映电影列表数据
					moviesServices.getMoviesComingSoonData( this.state.page)
					.then((res)=>{
						res.map((item)=>{this.state.listData2.push(item)});
						this.setState({listData2 : this.state.listData2});

					})
				}
			}
		})
	}
	componentDidUpdate(){
		contentScroll.refresh();
	}

}