<template>
	<div class="page subpage">
		<form class="search-title">
				<b @click="goback">＜</b>
			<input type="text" placeholder="请输入地址" v-model="keyword">
		</form>
		<strong>热门搜索</strong>
		<ul class="listdata">
			<li v-for="item in listData" @click="searchFood(item.word)">{{item.word}}</li>
		</ul>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//数据处理文件
	import homeServices from '../../services/homeServices.js'


	export default{
		data(){
			return{
				keyword:'',
				listData:[]
			}
		},
		computed:{
			...mapState([
				'longitude',
				'latitude',
			])
		},
		methods:{
			goback(){
				this.$router.go(-1);
			},
			searchFood(word){
				this.keyword = word;
				this.$router.push('/home/search-detail/'+word);
			}
		},
		created(){
		//请求商家搜索页热门搜索数据
			homeServices.seachSellerData(this.longitude, this.latitude)
			.then((res)=>{
				this.listData = res;
			})

		}
	}
</script>

<style>
	.search-title{
		width: 100%;
		text-align: center;
		color: #999;
		overflow: hidden;
	}
	.search-title b{
		float: left;
		width: 50px;
		height: 60px;
		line-height: 60px;
		font-size: 30px;
	}
	.search-title input{
		float: left;
		width: 80%;
		height: 40px;
		line-height: 40px;
		border-radius: 30px;
		padding-left: 15px;
		border: none;
		margin: 10px 0;
		outline:none;
		background: #f8f8f8;
	}
	.subpage strong{
		display: inline-block;
		width: 100%;
		height: 30px;
		padding-left: 20px;
		margin-top: 20px;
		color: #666;
	}
	.listdata{
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
	}
	.listdata li{
		display: block;
		padding: 4px;
		margin: 6px;
		background: #eee;
		color: #666;
		border-radius: 3px;
	}
</style>