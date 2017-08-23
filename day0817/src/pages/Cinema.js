import React, {Component} from 'react'
import CinemaServices from '../services/Services.js'
import '../css/cinema.css'
export default class Cinema extends Component{
	constructor(){
		super();
		this.state = {
			listData:[],
			time: new Date().getTime()

		}
	}

	render(){
		let lis = this.state.listData.map((item,index)=>{
			return(
				<div class="cinema-list" key={index} onClick={this.change.bind(this,index)}>
					<div class="cinema-list-header">{item.title}</div>
					<ul>
						{ item.data.map((item2,index2)=>{
							return ( <li key={index2}>
									<p class="cinema-name">{item2.name}<span>座</span><span>通</span></p>
									<p class="active">{ item2.active.map((item3,index3)=>{ return ( <span key={index3}>{item3}</span> ) }) }</p>
									<p class="address">{item2.address}</p>
									<span>距离未知</span>
								</li> )
							})
						}
					</ul>
				</div>
			)
		})
		return (
			<div id="Cinema" class="page">
				<div class="cinema-box">{lis}</div>
			</div>
		)
	}

	change(index){


	}

	componentWillMount(){
		//影院 列表数据
		CinemaServices.getCinemaListData(this.state.time)
		.then((res)=>{
			this.setState({listData : res})
			console.log(res)
		})
	}
}