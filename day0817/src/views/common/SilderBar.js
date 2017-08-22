import React, {Component} from 'react'

import menu from '../../services/silderBarInfo.js'

export default class SilderBar extends Component{
	constructor(){
		super();
		this.state = {
			pathname:''
		}
	}

	render(){
		let SilderBarstyle = { transform: this.props.show?"none" : "translateX(-100%)"}
		let data = this.state.pathname === '/stop'? menu.shopSilderBarData : menu.homeSilderBarData;
		let coverStyle = { opacity: this.props.show?" 0.6" : " 0",display: this.props.show ?  "block"  :"none" }

		return (
			<div class="cover">
				<nav class="silder-bar" style={SilderBarstyle}>
					{data.map((item,index)=>{
						return <a key={index} onClick={this.goPage.bind(this,item)} class="iconfont icon-arrow-right">{item.title}</a>
					})}
				</nav>
				<div style={coverStyle} onClick={this.hide.bind(this)}></div>
			</div>
		)
	}

	goPage(item){
		this.props.history.push(item.path);
		this.props.hideHandle(item.header);
		this.setState({pathname :item.path});
	}
	hide(){
		this.props.hideHandle();
	}
}