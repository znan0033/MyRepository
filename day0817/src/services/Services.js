import axios from 'axios'
import API from '../api'


//---------------- 影片页数据请求  --------------//
//正在热映数据
function getMoviesNowPlayingData(page){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.MoviesListNowPlayingApi}&page=${page}`)
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
					newItem.img = item.poster.origin;
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

//即将上映数据
function getMoviesComingSoonData(page){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.MoviesListComingSoonApi}&page=${page}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			var newArr = response.data.data.films.map((item)=>{
				var newItem = {};
					//id
					newItem.id = item.id;
					//名字
					newItem.name = item.name;

					//上映时间
					var now = new Date(item.premiereAt)
					var mm =  now.getMonth()+1;
					var dd =  now.getDate();
					var ww =  now.getDay();
					switch(ww){
						case 0 : ww = "七";
						break;
						case 1 : ww = "一";
						break;
						case 2 : ww = "二";
						break;
						case 3 : ww = "三";
						break;
						case 4 : ww = "四";
						break;
						case 5 : ww = "五";
						break;
						case 6 : ww = "六";
						break;
						default: '';
						break;
					}
					newItem.premiereAt = mm + "月"+ dd + "日上映";
					newItem.premiereAt2 = " 星期"+ww
					//图片
					newItem.img = item.poster.origin;
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
						if(i < item.actors.length-1){
							arr2.push(item.actors[i].name+" | " )
						}
						else if(i == item.actors.length-1){
							arr2.push(item.actors[i].name)
						}
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

//---------------- 影院 数据请求  --------------//

function getCinemaListData(time){

	return new Promise((resolve, reject)=>{
//		axios.get(`${API.CinemaListApi}__t=${time}`)
		axios.get(`${API.CinemaListApi}`)
		.then((response)=>{
//			console.log(response.data.data.cinemas);
			var abc = response.data.data.cinemas;

			//按区域分割数据
			//取出区域名称，组成数组
			var arr = [];
			var arr2 = [];
			abc.map((item)=>{
				arr.push(item.district.name);
				for(var i =0; i<arr.length; i++){
					if(arr2.indexOf(arr[i]) == -1){
						arr2.push(arr[i]);
					}
				}
			});

			//根据区名，遍历数据，组成新数组
			var newlist = [];
			for(var i=0; i<arr2.length; i++){
				var aaa = {};
				var bbb = [];
				aaa.title = arr2[i];
				aaa.data = bbb;
				for(var k=0; k<abc.length; k++){
					if(arr[i] == abc[k].district.name){
						if(bbb.indexOf(abc[k]) == -1){
							bbb.push(abc[k]);
						}
					}
				}
				newlist.push(aaa);
			}
			var newArr = newlist.map((item)=>{
				var newItem = {};
				//区名
				newItem.title = item.title;
				var list1 = item.data.map((item2)=>{
					var list2 = {};

					//影院名
					list2.name = item2.name;
					//影院id
					list2.id = item2.id;
					//影院地址
					list2.address = item2.address;
					//活动
					var aa = [];
					for(var i=0; i<item2.labels.length; i++){
						if(item2.labels[i].type == "DISCOUNT"){
							aa.push(item2.labels[i].name);
						}
						if(item2.labels[i].type == "SUNDRY"){
							aa.push("可乐爆米花");
						}
					}
					list2.active = aa;

					return list2;
				})

				newItem.data = list1;
				newItem.show = false;

				return newItem;
			})
			newArr[0].show = true
			resolve(newArr)
		})
		.catch((error)=>{
			console.log(error);
		})
	})
}

export default {
	getMoviesNowPlayingData,
	getMoviesComingSoonData,
	getStopHeaderListData,
	getProductListData,
	getMoviesDetailsData,
	getCinemaListData
}
