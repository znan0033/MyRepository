import React, {Component} from 'react'
import CityServices from '../services/Services.js'

export default class City extends Component{
	constructor(){
		super();
		this.state = {

			listData1:[],
			time: new Date().getTime()

		}
	}

	render(){
		return (
			<div class="page">
				City
			</div>
		)
	}
}