<template>
	<div id="Discover">
		<div class="page">
			<div class="discover-title">
				<b>＜</b>
				<span>发现</span>
			</div>
			<div class="discover-main1">
				<div v-for="(div,index) in discoverData1" class="header">
					<div v-if=" index == 1" v-for="item in div" class="discover-header" @click="topointsShop()">
						<b>{{item.title}}</b>
						<img :src="item.main_pic_hash | imgFilter"/>
						<p>{{item.subtitle}}</p>
					</div>
					<img :src="div[0].sub_pic_hash | imgFilter" class="discover-banner"/>
				</div>
			</div>
			<div class="discover-main2">
				<b>
					—●&nbsp; 限时好礼 &nbsp;●—
					<p>小积分换豪礼</p>
				</b>
				<div class="discover-main2-list">
					<div v-for="(item,index) in discoverData2">
						<p>{{item.corner_marker}}</p>
						<img :src="item.image_hash | imgFilter"/>
						<span>{{item.title}}</span>
						<span>{{item.points_required}}</span>
					</div>
				</div>
				<p class="more">查看更多 ></p>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//引入数据处理文件
	import discoverServices from '../../services/discoverServices.js'

	export default{
		data(){
			return{
				discoverData1:[],
				discoverData2:[],

			}
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		methods:{
			topointsShop(){
				this.$router.push('/discover/points-shop/');
			}
		},
		created(){
			//请求发现页banner数据
			discoverServices.getdiscoverData()
			.then((res)=>{
				this.discoverData1 = res;
			})
			//请求发现页列表数据
			discoverServices.getdiscoverSuggestData()
			.then((res)=>{
				this.discoverData2 = res;
			})
		}

	}
</script>

<style>
	#Discover .subpage{
	z-index: 5;
	bottom: 0;
	background: #fff;
	}
	#Discover img{
		display: block;
		width: 100%;
	}
	.discover-title{
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #0af;
		text-align: center;
		color: #fff;
		position: relative;
	}
	.discover-title b{
		width: 50px;
		height: 100%;
		font-size: 30px;
		position: absolute;
		top: 0;
		left:0;
	}
	.discover-title span{
		font-size: 20px;
	}
	.discover-main1{
		width: 100%;
		overflow: hidden;
	}
	.discover-main1 .header:nth-of-type(1){
		width: 100%;
		height: 170px;
	}
	.discover-main1 .header:nth-of-type(1) div{
		width: 50%;
		height: 50%;
		float: left;
		padding-top: 20px;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.discover-main1 .header:nth-of-type(1) .discover-header:nth-of-type(1){
		width: 50%;
		height: 100%;
		border-right: 1px solid #ddd;
		position: relative;
	}
	.discover-main1 .header:nth-of-type(1) .discover-header:nth-of-type(1) img{
		width: 50% !important;
		position: absolute;
		bottom: 10px;
		left: 30px;
	}
	.discover-main1 .header:nth-of-type(1) .discover-header:nth-of-type(1) p{
		width: 60%;
	}
	.discover-main1 .header:nth-of-type(1) div b{
		display: block;
		float: left;
		font-size: 18px;
	}
	.discover-main1 .header:nth-of-type(1) div p{
		float: left;
		font-size: 12px;
		color: #999;
	}
	.discover-main1 .header:nth-of-type(1) div img{
		float: right;
		margin-right: 10px;
		width: 30% !important;
	}
	.discover-banner{
		border-top: 10px solid #ddd;
		border-bottom: 10px solid #ddd;
	}
	.discover-main2 b{
		display: block;
		width: 100%;
		height: 45px;
		font-size: 18px;
		text-align: center;
		margin: 15px 0 10px;
	}
	.discover-main2 p{
		font-size: 12px;
		color: #999;
	}
	.discover-main2-list{
		width: 100%;
		height: 180px;
	}
	.discover-main2-list div{
		width: 30%;
		height: 100%;
		float: left;
		position: relative;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.discover-main2-list div img{
		width: 50%;
	}
	.discover-main2-list div p{
		position: absolute;
		top: 0;
		left: 20px;
		background: #000;
		color: #fff;
		padding: 1px;
	}
	.discover-main2-list div span{
		display: block;
		width: 100%;
		margin: 5px 0;
		color: #000;
	}
	.discover-main2 .more{
		width: 100%;
		font-size: 14px;
		text-align: center;
	}
</style>