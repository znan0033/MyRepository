import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import SilderBar from './views/common/SilderBar.js'
import AppHeader from './views/common/AppHeader.js'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Stop from './pages/Stop.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'
import City from './pages/City.js'
import MoviesDetails from './pages/MoviesDetails.js'
import store from './store'

import './css/app.css'

let unsubscribe;

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			showBar: false,
			headerTitle: store.getState().title
		}
	}

	render(){
		return(
			<BrowserRouter>
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
					<Route path="/" render={({history,location})=>{
						return <SilderBar history={history} show={this.state.showBar} hideHandle={this.menuHandle.bind(this)}/>
					}}/>

					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movies}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/stop" component={Stop}/>
					<Route path="/me" component={Me}/>
					<Route path="/card" component={Card}/>
					<Route path="/city-list" component={City}/>
					<Route path="/Movies-details/:id" component={MoviesDetails}/>

				</div>
			</BrowserRouter>
		)
	}
	menuHandle(headerTitle){//控制侧边栏显示
		this.setState({showBar: !this.state.showBar});
		if(headerTitle){
			this.setState({headerTitle});
		}
	}

	componentWillMount(){
		//监听store上state的变化，监听多少次，就触发多少个函数
		//调用监听的方法，会返回一个异常监听的方法
		unsubscribe = store.subscribe(()=>{
//			console.log("监听到变化"+store.getState().title)
			this.setState({headerTitle: store.getState().title});
		})
	}
	componentWillUnmount(){
		//在组件将要销毁时，将监听移除。
//		console.log('one componentWillUnmount');
		unsubscribe();
	}
}
