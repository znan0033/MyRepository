//home页面数据请求处理

//引入 API 文件
import API from '../url-api'
import axios from 'axios'

//请求地址
function getAddressData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.addressApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data.name);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
}

//请求天气
function getWeatherData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.weatherApi}?longitude=${lg}&latitude=${lt}`)
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

//请求热搜词
function getHotWordsData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.hotWordsApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			var newArr = response.data.map((item)=>{
				return item.word;
			});
			resolve(newArr)
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
}

//请求轮播图
function getHomeBannerData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.categoryApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
//			console.log(response);
			var newArr = response.data[0].entries.map((item)=>{
				var newItem = {};
				newItem.name = item.name;
				newItem.id = item.id;
				newItem.imgPath = item.image_hash;
				newItem.flag = item.business_flag;
				return newItem;
			})
			resolve(newArr);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
}

//请求商家列表
function getHomeListData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeListApi}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{

			var newArr = response.data.map((sellerItem)=>{
				var newItem = {};
				//名字
				newItem.name = sellerItem.name;
				//id
				newItem.id = sellerItem.id;
				//图片
				newItem.imgPath = sellerItem.image_path;
				//销量
				newItem.orderNum = sellerItem.recent_order_num;
				//起送价
				newItem.amount = parseInt(sellerItem.float_minimum_order_amount);
				//配送费
				newItem.delivery = parseInt(sellerItem.float_delivery_fee);
				//评分
				newItem.rating = sellerItem.rating;
				//时间
				newItem.leadTime = sellerItem.order_lead_time;
				//活动
				newItem.activities = sellerItem.activities;



				return newItem;
			})
			resolve(newArr);
		})
		//请求失败
		.catch((error)=>{
			console.log(error);
		});
	})
}

//请求搜索地址
function seachAddressData(keyword, lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.addressSearchApi}&longitude=${lg}&latitude=${lt}&keyword=${keyword}`)
		.then((response)=>{
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//请求搜索商家
function seachSellerData(lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.sellerSearchApi}&keyword=&latitude=${lt}&longitude=${lg}`)
		.then((response)=>{
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}



export default{
	getAddressData,
	getWeatherData,
	getHotWordsData,
	getHomeBannerData,
	getHomeListData,
	seachAddressData,
	seachSellerData
}
