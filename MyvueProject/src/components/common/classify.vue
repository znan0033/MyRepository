<template>
	<div class="classify one-border-top">
		<div class="classify-list">
			<ul class="list-left">
				<li v-for="(item,index) in listData" @click="classifylist(index)" class="one-border-bottom">
					<span>{{item.name}}</span>
					<span>{{item.count}}</span>
				</li>
			</ul>
			<ul class="list-right">
				<li v-for="(item,index) in listData" v-if="index != 0 && Index == index">
					<ul>
						<li v-for="li in item.sub_categories">
							<img :src="li.image_url | imgFilter" />
							<span>{{li.name}}</span>
							<span>{{li.count}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//数据处理文件
	import hotWordsServices from '../../services/hotWordsServices.js'

	export default{
		data(){
			return{
				listData: [],
				listData2: [],
				Index: ''
			}
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		methods:{
			classifylist(index){
				this.Index = index
			}
		},
		created(){
			//请求商家列表
			hotWordsServices.getclassifyListData(this.longitude,this.latitude)
			.then((res)=>{
				this.listData = res;
				console.log(res);
			})

		}

	}
</script>

<style>
.classify{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 100px;
	left: 0;
	background: rgba(0,0,0,0.2);
	z-index: 10;
}
.classify-list{
	width: 100%;
	height: 60%;
	background: #fff;
}
.classify-list .list-left{
	float: left;
	width: 40%;
	height: 100%;
	background: #fafafa;
	color: #666;
	border-right: 1px solid #ddd;
	box-sizing: border-box;
	overflow: auto;
}
.classify-list .list-right{
	float: left;
	width: 60%;
	height: 100%;
	background: #fff;
	overflow: auto;
}
.classify-list .list-left li{
	width: 100%;
	height: 45px;
	line-height: 45px;
	font-size: 12px;
	padding: 0 10px;
	box-sizing: border-box;
}
.classify-list .list-left li>span:nth-of-type(2){
	display: block;
	float: right;
	line-height: 16px;
	margin-top: 14px;
	padding:0 2px;
	border: 1px solid #ddd;
	border-radius: 10px;
	background: #fff;
	color: #666;
}
.list-right li{
	width: 100%;
	height: 45px;
	line-height: 45px;
	font-size: 12px;
	padding: 0 10px;
	box-sizing: border-box;

}
.list-right img{
	display: block;
	float: left;
	width: 24px;
	margin:10px 10px 0 0;
}
.classify-list .list-right li>span:nth-of-type(2){
	display: block;
	float: right;
	line-height: 16px;
	margin-top: 14px;
	color: #666;
}
</style>