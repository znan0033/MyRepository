//热词搜索页面数据请求处理

//引入 API 文件
import API from '../url-api'
import axios from 'axios'

//请求分类列表
function getclassifyListData(lg,lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.classifyListApi}&longitude=${lg}&latitude=${lt}`)
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

//请求热词搜索页商家列表
function gethotWordsSearcData(keyword,lg, lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.hotWordsSearchApi}&keyword=${keyword}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
//			console.log(response)
			var aa = response.data[0] ? response.data[0] : response.data[1];
			var newArr = aa.restaurant_with_foods.map((sellerItem)=>{
				var newItem = {};
				//名字
				newItem.name = sellerItem.restaurant.name;
				//id
				newItem.id = sellerItem.restaurant.id;
				//图片
				newItem.imgPath = sellerItem.restaurant.image_path;
				//销量
				newItem.orderNum = sellerItem.restaurant.recent_order_num;
				//起送价
				newItem.amount = parseInt(sellerItem.restaurant.float_minimum_order_amount);
				//配送费
				newItem.delivery = parseInt(sellerItem.restaurant.float_delivery_fee);
				//评分
				newItem.rating = sellerItem.restaurant.rating;
				//时间
				newItem.leadTime = sellerItem.restaurant.order_lead_time;

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




export default{
	getclassifyListData,
	gethotWordsSearcData

}
