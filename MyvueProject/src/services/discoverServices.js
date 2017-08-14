//发现页面数据请求处理


//引入 API 文件
import API from '../url-api'
import axios from 'axios'


//请求发现页banner
function getdiscoverData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.discoverApi}`)
		//请求成功
		.then((response)=>{
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
}

function getdiscoverSuggestData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.discoverSuggestApi}`)
		//请求成功
		.then((response)=>{
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
}

export default{
	getdiscoverSuggestData,
	getdiscoverData
}
