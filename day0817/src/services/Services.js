import axios from 'axios'
import API from '../api'


//---------------- 影片页数据请求  --------------//
function getMoviesData(page){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.MoviesListApi}&page=${page}`)
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
					newItem.poster = item.poster;
					//描述
					newItem.intro = item.intro;

				return newItem;
			});
			resolve(newArr)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}




//---------------- 影片详情数据请求  --------------//

function getMoviesDetailsData(id,time){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.MoviesDetailsApi}${id}?__t=${time}`)
		.then((response)=>{

			var arr = [];
			arr.push(response.data.data.film);
//			console.log(arr);
			var newArr = arr.map((item)=>{
				var newItem = {};
					//导演
					newItem.director = item.director;

					//主演
				var arr2 = []
					for(var i=0; i<item.actors.length; i++){
						arr2.push(item.actors[i].name+" |")
					}
					newItem.grade = arr2;

					//地区语言
					newItem.nation = item.nation+"("+item.language+")";

					//类型
					newItem.category = item.category;

					//上映日期
					var now = new Date(item.premiereAt)
					var mm =  now.getMonth()+1;
					var dd =  now.getDate();
					newItem.premiereAt = mm + "月"+ dd + "日上映";

					//简介
					newItem.synopsis = item.synopsis;

					//图片
					newItem.img = item.cover.origin;

				return newItem;
			});
			resolve(newArr)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

//---------------- 商城页数据请求  --------------//
function getStopHeaderListData(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.StopHeaderListApi}`)
		.then((response)=>{
//			console.log(response.data.data);
				var arr1 = response.data.data.slice(0,8);
				var arr2 = response.data.data.slice(8,10);
				var arr3 = response.data.data.slice(10,12);
				var arr4 = response.data.data.slice(12,20);
				var newItem = [];
				newItem.push(arr2,arr1,arr3,arr4)

			resolve(newItem)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

function getProductListData(page){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.StopListApi}&page=${page}`)
		.then((response)=>{
//			console.log(response.data.data.list);
			var newArr = response.data.data.list.map((item)=>{
				var newItem = {};
					//id
					newItem.id = item.id;
					//名字
					newItem.name = item.masterName;
					//销量
					newItem.num = "已售"+item.displaySalesCount;
					//图片
					newItem.image = item.skuList[0].image;
					//价格
					newItem.price = "￥"+(item.skuList[0].price/100)+".00";

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
	getMoviesData,
	getStopHeaderListData,
	getProductListData,
	getMoviesDetailsData
}
