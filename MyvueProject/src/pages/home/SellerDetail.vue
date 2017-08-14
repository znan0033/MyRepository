<template>
	<div id="SellerDetail">
		<div class="page subpage">
			<div class="Seller-title">
				<b @click="goback">＜</b>
			</div>
			<div class="Seller-header">
				<img :src="listdata1.image_path | imgFilter" class="bg"/>
				<img :src="listdata1.image_path | imgFilter" class="logo"/>
				<p>{{listdata1.name}}</p>
				<span v-if="listdata1.piecewise_agent_fee != null">商家配送/{{listdata1.order_lead_time}}分钟送达/{{listdata1.piecewise_agent_fee.description}}</span>
				<p class="notice">公告：{{listdata1.promotion_info}}</p>
				<ul class="active">
					<li v-for="item in listdata1.activities">
						<span>{{item.icon_name}}</span>
						<span>{{item.tips}}</span>
					</li>
					<span class="active-length" v-if="listdata1.activities !=null">{{listdata1.activities.length}}个活动</span>
				</ul>
			</div>
			<div class="Seller-nav one-border-bottom">
				<span @click="isshow('show1')">商品</span>
				<span @click="isshow('show2')">评价</span>
				<span @click="isshow('show3')">店铺</span>
			</div>
			<seller-list :data='listdata2' v-if="show1 != false"></seller-list>
			<seller-assess :listdata3='listdata3':listdata4='listdata4':listdata5='listdata5' v-if="show2 != false"></seller-assess>
			<seller-store :data='listdata1' v-if="show3 != false"></seller-store>
		</div>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//数据处理文件
	import SellerDetailServices from '../../services/SellerDetailServices.js'
	//商家列表模块
	import Sellerlist from '../../components/sellerDetail/list.vue'
	//商家评价模块
	import Sellerassess from '../../components/sellerDetail/assess.vue'
	//商家店铺模块
	import Sellerstore from '../../components/sellerDetail/store.vue'

	export default{
		data(){
			return{
				listdata1: [],
				listdata2: [],
				listdata3: [],
				listdata4: '',
				listdata5: [],
				id: this.$route.params.id,
				show1:true,
				show2:false,
				show3:false
			}
		},
		components:{
			'seller-list': Sellerlist,
			'seller-assess': Sellerassess,
			'seller-store': Sellerstore

		},

		methods:{
			goback(){
				this.$router.go(-1)
			},
			isshow(show){
				if(show == 'show1'){
					this.show1 = !this.show1;
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
			//请求商家信息
			SellerDetailServices.SellerDetailheaderData(this.id)
			.then((res)=>{
				this.listdata1 = res;

			})
			//请求商家评论
			SellerDetailServices.SellerDetailAssessData1(this.id)
			.then((res)=>{
				this.listdata3 = res;
			})
			SellerDetailServices.SellerDetailAssessData2(this.id)
			.then((res)=>{
				this.listdata4 = res;
			})
			SellerDetailServices.SellerDetailAssessData3(this.id)
			.then((res)=>{
				this.listdata5 = res;
			})
			//请求商家列表
			SellerDetailServices.SellerDetailData(this.id)
			.then((res)=>{
				this.listdata2 = res;
//				console.log(res)
			})
		}

	}
</script>

<style>
	.Seller-title{
		width: 100%;
		height: 45px;
		line-height: 45px;
		color: #ddd;
		position: absolute;
		z-index: 1;
	}
	.Seller-title b{
		width: 50px;
		height: 100%;
		font-size: 30px;
		position: absolute;
		top: 0;
		left:0;
	}
	.Seller-header{
		width: 100%;
		position: relative;
		padding-top: 50px;
		background: rgba(0,0,0,0.3);
		overflow: hidden;
		color: #fff;
	}
	.Seller-header .bg{
		width: 400%;
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0;
		filter: blur(8px);
	}
	.Seller-header .logo{
		width: 18%;
		margin:0 15px;
		float: left;
	}
	.Seller-header p{
		font-size: 18px;
	}
	.Seller-header .notice{
		display: block;
		font-size: 12px;
		width: 70%;
		height: 14px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.Seller-header .active{
		width: 100%;
		height: 20px;
		margin-top: 20px;
		overflow: hidden;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.Seller-header .active li span:nth-of-type(1){
		background: #70bc46;
	}
	.Seller-header .active-length{
		position: absolute;
		bottom: 2px;
		right: 10px;
	}
	.Seller-header .Seller-nav{
		width: 100%;
		height: 40px;

	}
    .Seller-nav span{
		display: inline-block;
		width: 32%;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
</style>