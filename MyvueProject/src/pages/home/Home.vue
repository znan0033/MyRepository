<template>
	<div id="Home">
		<!--外卖页面布局开始-->
		<div class="page main">
			<div class="wrap">

			<!--页面头部-->
				<home-header :address = "address" :weather="weatherData" :hot-words="hotWords"></home-header>

			<!-- 轮播图 -->
				<home-banner :data = "bannerData"></home-banner>

			<!-- 商家列表 -->
				<b class="subTitle one-border-bottom">推荐商家</b>
				<seller-list :data = "listData" @scroollchange="change"></seller-list>
			</div>
		</div>
		<!-- 子页面 -->
		<transition enter-active-class="slideInRight animated" leave-active-class="slideOutRight animated">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//数据处理文件
	import homeServices from '../../services/homeServices.js'
	//header模块
	import HomeHeader from '../../components/home/HomeHeader.vue'
	//banner模块
	import HomeBanner from '../../components/home/HomeBanner.vue'
	//商家列表模块
	import SellerList from '../../components/common/SellerList.vue'



	export default {
		data(){
			return{
				address:'',
				weatherData: {},
				hotWords: [],
				bannerData: [],
				listData: [],
				contentScroll: null
			}
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		components:{
			'home-header': HomeHeader,
			'home-banner': HomeBanner,
			'seller-list': SellerList
		},
		methods:{
			requestData(){
				var lg = this.longitude;
				var lt = this.latitude;
				//请求地址
				homeServices.getAddressData(lg,lt)
				.then((res)=>{
					this.address = res;
				})
				//请求天气
				homeServices.getWeatherData(lg,lt)
				.then((res)=>{
					this.weatherData = res;
				})
				//请求热搜词
				homeServices.getHotWordsData(lg,lt)
				.then((res)=>{
					this.hotWords = res;
				})
				//请求轮播图
				homeServices.getHomeBannerData(lg,lt)
				.then((res)=>{
					this.bannerData = res;
				})
				//请求商家列表
				homeServices.getHomeListData(lg,lt)
				.then((res)=>{
					this.listData = res;
				})
			},
			change(){  //监听商家列表高度变化，刷新滚动视图
				setTimeout(()=>{
					this.contentScroll.refresh();
				})
			}
		},
		created(){
			//初始化页面数据，发送各种请求
			this.requestData();

			//监听地址改变的事件
			this.$eventHandle.$on('get-address', (val)=>{

				this.address = val;
			})

			//监听经纬度变化
			this.$watch('longitude', this.requestData);
			this.$watch('latitude', this.requestData);
		},
		mounted(){
			//创建滚动视图
			this.contentScroll = new IScroll("#Home .main",{

			});
		},
		updated(){
			this.contentScroll.refresh();
		}
	}


</script>

<style>
	#Home{
		background:#0085ff;
	}
	#Home .subTitle{
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		padding-left: 20px;
	}
	#Home .subpage{
	z-index: 5;
	bottom: 0;
	background: #fff;
}

</style>