import React, {Component} from 'react'

import moviesServices from '../services/Services.js'

import '../css/movies.css'

export default class Movies extends Component{
	constructor(){
		super();
		this.state = {
			listData:[],
			page:1,
			show:true
		}
	}

	render(){

		let ShowStyle = { display: this.state.show ?  "block"  :"none" }
		let Show2Style = { display: this.state.show ?  "none"  :"block" }

		let pnow = this.state.show ? 'active' : ''
		let pcoming = this.state.show ? '' : 'active'
		return (
			<div id="Movies" class="page">
				<div class="movies-title">
					<p onClick={this.show.bind(this,'1')} class={pnow}>正在热映</p>
					<p onClick={this.show.bind(this,'2')} class={pcoming}>即将上映</p>
				</div>
				<ul class="now-play movies-list" style={ShowStyle}>
					{
						this.state.listData.map((item,index)=>{
							return(
								<li key={index}>
									<div class="img"><img src={item.poster.origin}/></div>
									<p>
										<span>{item.name}</span>
										<b>{item.grade}</b>
									</p>
									<p>{item.intro}</p>
									<p>
										<span>{item.cinemaCount}</span>家影院上映
										<span>{item.watchCount}</span>人购票
									</p>
								</li>
							)
						})
					}
				</ul>
				<ul class="coming-soon movies-list" style={Show2Style}>

				</ul>
			</div>
		)
	}
	show(val){
		console.log(val);
		if(val == "1"){
			this.setState({show : true});

		}
		if(val == "2"){
			this.setState({show : false});

		}


	}

	componentWillMount(){
		//home 列表数据
		moviesServices.getMoviesData( this.state.page)
		.then((res)=>{
//			console.log(res);
			this.setState({listData : res})
		})

	}

}