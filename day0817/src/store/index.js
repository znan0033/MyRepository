import {createStore} from 'redux'

//会多次调用的，只有初始化时，state才是空
let reducer = function(state, action){

	if(state == null){
		state = {
			title: '卖座电影'
		};
	}
//	console.log("odl"+state.title);
	if(action.type === 'changename'){
		state.title = action.val;
	}
//	console.log("new"+state.title);
	return state;
}

export default createStore(reducer);
