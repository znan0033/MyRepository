import React, {Component} from 'react'

import moviesServices from '../services/Services.js'
import '../css/moviesdetails.css'

export default class MoviesDetails extends Component{
	constructor({location}) {
	    super()
	   	this.state = {
		listData:[],
	   	id : location.pathname.slice(16),
		time: new Date().getTime()
	   }
	}

	render(){
		return (
			<div id="MoviesDetails" class="page">

				{
					this.state.listData.map((item,index)=>{
						return (
							<div class="movies-details" key={index}>
								<img src={item.img}/>
								<div class="jieshao">影片简介</div>
								<div><p>导<span></span>演</p> : {item.director}</div>
								<div><p>主<span></span>演</p> : {item.grade}</div>
								<div><p>地区语言</p> : {item.nation}</div>
								<div><p>类<span></span>型</p> : {item.category}</div>
								<div><p>上映日期</p> : {item.premiereAt}</div>
								<div class="synopsis">{item.synopsis}</div>
								<button>立即购票</button>
							</div>
						)
					})
				}

			</div>
		)
	}

	componentWillMount(){

		moviesServices.getMoviesDetailsData(this.state.id, this.state.time)
		.then((res)=>{
			this.setState({listData : res});
//			console.log(this.state.listData)
		})



	}

}