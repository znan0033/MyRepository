//---------- home 页数据  ----------//
//home 轮播图
const homeBannerApi = "../../static/json/banner.json"
//home 列表数据
const homeNowplayApi = "v4/api/film/now-playing?page=1&count=5"
const homeComingSoonApi = "v4/api/film/coming-soon?page=1&count=3"



//---------- Movies 页数据  ----------//
//Movies列表
const MoviesListNowPlayingApi = "/v4/api/film/now-playing?count=7"
const MoviesListComingSoonApi = "/v4/api/film/coming-soon?count=7"

//---------- 影片详情数据 ----------//
const MoviesDetailsApi = "/v4/api/film/"




//---------- 商城数据  ----------//
//商城数据
const StopHeaderListApi = "/api/ad/list"
const StopListApi = '/api/recommend/home?num=20'

//---------- 影院数据 ----------//
//const CinemaListApi = "v4/api/cinema?"
const CinemaListApi = "../../static/json/123.json"



export default {
	homeBannerApi,
	homeNowplayApi,
	homeComingSoonApi,
	StopHeaderListApi,
	MoviesListNowPlayingApi,
	MoviesListComingSoonApi,
	StopListApi,
	MoviesDetailsApi,
	CinemaListApi

}
