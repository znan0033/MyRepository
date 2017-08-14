//商家详情页面数据请求处理

//引入 API 文件
import API from '../url-api'
import axios from 'axios'

//商商家信息
function SellerDetailheaderData(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.SellerDetailheaderApi}${id}${API.SellerDetailheader2Api}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
	
}



//商品列表
function SellerDetailData(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.SellerDetailApi}${id}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
	
}

//商家评价
function SellerDetailAssessData1(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.SellerDetailXQ1Api}${id}${API.SellerDetailXQ2Api}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
	
}
function SellerDetailAssessData2(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.SellerDetailXQ1Api}${id}${API.SellerDetailXQ3Api}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
	
}
function SellerDetailAssessData3(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.SellerDetailXQ1Api}${id}${API.SellerDetailXQ4Api}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			resolve(response.data);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
	
}



export default{
	SellerDetailheaderData,
	SellerDetailData,
	SellerDetailAssessData1,
	SellerDetailAssessData2,
	SellerDetailAssessData3
}
