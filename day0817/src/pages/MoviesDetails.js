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
								<div class="jieshao">影片介绍</div>
								<div class="director"><span>导演</span>{item.director}</div>
								<div class="grade"><span>主演</span></div>
								<div class="nation"><span>地区语言</span></div>
								<div class="category"><span>类型</span></div>
								<div class="premiereAt"><span>上映日期</span></div>
								<div class="synopsis"></div>

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
			console.log(this.state.listData)
		})



	}

}