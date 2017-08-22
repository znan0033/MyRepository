import axios from 'axios'
import API from '../api'

//home 轮播图
function getHomeBanner(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}`)
		.then((response)=>{
			resolve(response.data)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
//home 列表数据
function getHomeNowplay(time){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeNowplayApi}&__t=${time}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			var newArr = response.data.data.films.map((item)=>{
				var newItem = {};
					//影院数量
					newItem.cinemaCount = item.cinemaCount;
					//评分
					newItem.grade = item.grade;
					//id
					newItem.id = item.id;
					//名字
					newItem.name = item.name;
					//购票数量
					newItem.watchCount = item.watchCount;
					//图片
					newItem.cover = item.cover;

				return newItem;
			});
			resolve(newArr)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}
function getHomeComingSoon(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeComingSoonApi}`)
		.then((response)=>{
//			console.log(response);
			var newArr = response.data.data.films.map((item)=>{
				var newItem = {};
					//影院数量
					newItem.cinemaCount = item.cinemaCount;
					//评分
					newItem.grade = item.grade;
					//id
					newItem.id = item.id;
					//名字
					newItem.name = item.name;
					//购票数量
					newItem.watchCount = item.watchCount;
					//图片
					newItem.cover = item.cover;

				return newItem;
			});
			resolve(newArr)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}





export default {
	getHomeBanner,
	getHomeNowplay,
	getHomeComingSoon
}
