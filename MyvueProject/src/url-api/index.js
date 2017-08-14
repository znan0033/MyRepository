

//-------- home页面接口 ------------//
//图片
const imgHost = 'http://fuss10.elemecdn.com/';
//地址
const addressApi = '/bgs/poi/reverse_geo_coding';  //?latitude=22.54286&longitude=114.059563
//天气
const weatherApi = '/bgs/weather/current';  //?latitude=22.54286&longitude=114.059563
//热搜词
const hotWordsApi = '/shopping/v3/hot_search_words';  //?latitude=22.54286&longitude=114.059563
//轮播模块数据
const categoryApi = '/shopping/v2/entries?templates[]=main_template';  //latitude=22.54286&longitude=114.059563&
//外卖页商家列表
const homeListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5'  //latitude=22.54286&longitude=114.059563&
//搜索详情页
const addressSearchApi = '/bgs/poi/search_poi_nearby?offset=0&limit=10';
//商家搜索页
const sellerSearchApi = '/shopping/v3/hot_search_words?geohash=ws0brjn1zcd4';
//热词搜索列表
const hotWordsSearchApi = '/shopping/v1/restaurants/search?offset=0&limit=20&search_item_type=2&extra[]=activities';
//热词搜索页分类列表
const classifyListApi = '/shopping/v2/restaurant/category?';
//轮播模块详情页商家列表
const bannerListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=240&restaurant_category_ids[]=241&restaurant_category_ids[]=242&restaurant_category_ids[]=245';
//商家详情页
//头部
const SellerDetailheaderApi = '/shopping/restaurant/';
const SellerDetailheader2Api = '?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification';
//列表
const SellerDetailApi = '/shopping/v2/menu?restaurant_id=';
//商家评价
const SellerDetailXQ1Api = '/ugc/v2/restaurants/';
const SellerDetailXQ2Api = '/ratings?has_content=true&offset=0&limit=10';
const SellerDetailXQ3Api = '/ratings/scores';
const SellerDetailXQ4Api = '/ratings/tags'

//---------  发现页面接口  --------------//
//发现页
const discoverSuggestApi = '/member/gifts/suggest';
const discoverApi = 'member/v1/discover?platform=1&block_index=0'
//积分商城
const PointsShopbannerApi = '/floor/1/0?duibaPageId=3&floorId=157&_=1502538653516&callback=jsonp1';
const PointsShopmain1Api = '/floor/2/0?duibaPageId=3&floorId=204&_=1502538653521&callback=jsonp2';
const PointsShopmain2Api = '/floor/8/0?duibaPageId=3&floorId=24&_=1502538653522&callback=jsonp3';
const PointsShoplistApi = '/floor/3/0?duibaPageId=3&floorId=155&_=1502538653524&callback=jsonp4'









//const addressApi = '/static/data/address.json';
//
//const weatherApi = '/static/data/weather.json';
//
//const hotWordsApi = '/static/data/hotSearch.json'
//
//const categoryApi = '/static/data/entries.json';


export default {
	imgHost,
	addressApi,
	weatherApi,
	hotWordsApi,
	categoryApi,
	homeListApi,
	addressSearchApi,
	sellerSearchApi,
	hotWordsSearchApi,
	classifyListApi,
	bannerListApi,
	discoverApi,
	discoverSuggestApi,
	PointsShopbannerApi,
	PointsShopmain1Api,
	PointsShopmain2Api,
	PointsShoplistApi,
	SellerDetailheaderApi,
	SellerDetailheader2Api,
	SellerDetailApi,
	SellerDetailXQ1Api,
	SellerDetailXQ2Api,
	SellerDetailXQ3Api,
	SellerDetailXQ4Api


}
