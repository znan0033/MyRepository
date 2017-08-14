<template>
	<div class="store">
		<p class="store-title one-border-bottom">活动与属性</p>
		<ul class="store-active">
			<li v-for="item in data.activities">
				<span :style="{background:  '#'+item.icon_color}">{{item.icon_name}}</span>
				<span>{{item.tips}}</span>
			</li>
			<li v-if="data.supports[0] != null">
				<span :style="{background:  '#'+data.supports[0].icon_color}">{{data.supports[0].icon_name}}</span>
				<span>{{data.supports[0].description}}</span>
			</li>
		</ul>
		<div class="store-img" v-if="data.albums != null">
			<p class="store-title one-border-bottom">商家实景</p>
			<img v-for="img in data.albums" :src="img.cover_image_hash  | imgFilter"/>
		</div>
		<p class="store-title one-border-bottom">商家信息</p>
		<div>
			<p class=" one-border-bottom" v-if="data.description != ''">{{data.description}}</p>
			<p class=" one-border-bottom">地址：{{data.address}}</p>
			<p class=" one-border-bottom">营业时间：{{data.opening_hours[0]}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			data: Object
		}
	}
</script>

<style>
	.store{
		width: 100%;
		position: absolute;
		top: 190px;
		bottom: 0;
		overflow: auto;
	}
	.store div p{
		width: 100%;
		min-height: 50px;
		padding:10px 0 10px 10px ;
		box-sizing: border-box;
		overflow: hidden;
	}
	.store .store-title{
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		font-size: 16px;
	}
	.store-active{
		border-bottom:10px solid #ddd ;
	}
	.store-active li{
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		overflow: hidden;
	}
	.store-active li span:nth-of-type(1){
		color: #fff;
	}
	.store-active li span:nth-of-type(2){
		display: block;
		width: 95%;
		float: right;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.store-img{
		width: 100%;
		border-bottom: 10px solid #ddd;
		overflow: hidden;
	}
	.store-img img{
		display: block;
		float: left;
		width: 22%;
		margin: 5px;
	}

</style>