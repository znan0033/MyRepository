<template>
	<div class="page subpage seach">
			<form class="search-detail-title">
				<b @click="goback">＜</b>
				<input type="text" v-model="keyword">

			</form>
			<div class="search-detail-nav">
				<span @click="isShow('show1')">{{allProducts}}</span>
				<span @click="isShow('show2')">排序</span>
				<span @click="isShow('show3')">筛选</span>
			</div>
			<seller-classify v-if="show1"></seller-classify>
			<seller-sorting v-if="show2"></seller-sorting>
			<seller-screening v-if="show3"></seller-screening>
		<div class="search-detail">
			<div class="wrap">
			<!-- 商家列表 -->
				<seller-list :data = "listData"></seller-list>
			</div>
		</div>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//数据处理文件
	import hotWordsServices from '../../services/hotWordsServices.js'
	//商家列表模块
	import SellerList from '../../components/common/SellerList.vue'
	//分类模块
	import classify from '../../components/common/classify.vue'
	//筛选模块
	import screening from '../../components/common/screening.vue'
	//排序模块
	import sorting from '../../components/common/sorting.vue'

	export default{
		data(){
			return{
				listData:[],
				keyword:this.$route.params.word,
				show1: false,
				show2: false,
				show3: false,
				allProducts: '全部商品',
				contentScroll :null
			}
		},
		computed:{
			...mapState([
				'longitude',
				'latitude'
			])
		},
		components:{
			'seller-list': SellerList,
			'seller-classify':classify,
			'seller-screening':screening,
			'seller-sorting':sorting
		},
		methods:{
			goback(){
				this.$router.go(-1);
			},
			isShow(show){
				if(show == 'show1'){
					this.show1 = !this.show1;
					if(this.show1 == true){
						this.allProducts = '分类'
					}
					else{
						this.allProducts = '全部商品'
					}
					this.show2 = false;
					this.show3 = false;
				}
				else if(show == 'show2'){
					this.show2 = !this.show2
					this.show1 = false;
					this.show3 = false;
				}
				else{
					this.show3 = !this.show3
					this.show1 = false;
					this.show2 = false;
				}
			}
		},
		created(){
			//请求商家列表
			hotWordsServices.gethotWordsSearcData(this.keyword,this.longitude,this.latitude)
			.then((res)=>{
				this.listData = res;
			})

		},
		mounted(){
			this.$watch('keyword' ,(newVal,oldVal)=>{
				if(newVal == ''){
					this.$router.go(-1);
				}
			});
			//创建滚动视图
			this.contentScroll = new IScroll("#Home .seach .search-detail",{

			});

		},
		updated(){
			this.contentScroll.refresh();
		}



	}
</script>

<style>
	.search-detail-title{
		width: 100%;
		text-align: center;
		color: #999;
		overflow: hidden;
		background: #fff;
	}
	.search-detail-title b{
		float: left;
		width: 50px;
		height: 60px;
		line-height: 60px;
		font-size: 30px;
	}
	.search-detail-title input{
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
	.search-detail-nav{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		display: flex;
		background: #fff;
	}
	.search-detail-nav span{
		flex: 1;
		color: #666;
	}
	.search-detail-nav>.active{
		color: ;
	}
	.search-detail{
		width: 100%;
		position: absolute;
		top: 100px;
		bottom: 0;
		overflow: hidden;
	}
</style>