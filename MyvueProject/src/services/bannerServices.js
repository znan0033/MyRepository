//banner详情页面数据请求处理

//引入 API 文件
import API from '../url-api'
import axios from 'axios'


//请求商家列表
function getbannerListData(keyword,lg,lt){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.bannerListApi}&keyword=${keyword}&longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			console.log(response)
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


export default{
	getbannerListData
}
