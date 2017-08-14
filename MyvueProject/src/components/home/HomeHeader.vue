<template>
	<div class="home-header">
		<div class="info">
			<!--地址-->
			<p class="address">
			<router-link to="/home/address">
				<span>★</span>
				<b>{{address}}</b>
			</router-link>
			</p>
			<!--天气-->
			<p class="weather">
				<span>{{weather.temperature}}°</span>
				<span>{{weather.description}}</span>
				<img :src="weather.image_hash | imgFilter"/>
			</p>
		</div>

		<!-- 搜索框 -->
		<router-link class="seach" to="/home/search">搜索商家、商品</router-link>

		<!-- 热搜词 -->
		<div class="hot-words">
			<span v-for="word in hotWords" @click="toSeachDetail(word)">{{word}}</span>
		</div>

	</div>
</template>

<script>
	export default{
		props:{
			address: String,
			weather: Object,
			hotWords: Array
		},
		methods:{
			toSeachDetail(word){
				this.$router.push('/home/search-detail/'+word);
			}
		}
	}
</script>

<style>
	.home-header{
		width: 100%;
		height: 124px;
		background:#0085ff;
		padding: 14px 15px;
		box-sizing: border-box;
	}
	.home-header .info{
		height: 36px;
	}
	.home-header .info .address{
		float: left;
		width: 60%;
		height: 36px;
		line-height: 36px;
	}
	.home-header .info .address b{
		color: #fff;
		font-weight: normal;
		font-size: 16px;
	}
	.home-header .info .address span{
		color: #fff;
		font-weight: normal;
		font-size: 20px;
	}
	.home-header .weather{
		float: right;
		width: 40%;
		height: 36px;
		position: relative;
	}
	.home-header .weather img{
		width: 30px;
		position: absolute;
		top: 0;
		right: 0;
	}
	.home-header .weather span{
		color: #fff;
		position: absolute;
		right: 30px;
		height: 15px;
	}
	.home-header .weather span:nth-of-type(1){
		font-size: 14px;
		top: 0;
	}
	.home-header .weather span:nth-of-type(2){
		font-size: 12px;
		top: 15px;
	}
	.home-header .seach{
		display: block;
		width: 100%;
		height: 36px;
		margin: 6px 0;
		border-radius: 30px;
		background: #fff;
		text-align: center;
		line-height: 36px;
		font-size: 12px;
		color: #666;
	}
	.home-header .hot-words{
		height: 12px;
		line-height: 12px;
		font-size: 12px;
		white-space: nowrap;
		overflow-x: auto;
	}
	.home-header .hot-words span{
		color: #fff;
		margin: 6px;
	}
</style>