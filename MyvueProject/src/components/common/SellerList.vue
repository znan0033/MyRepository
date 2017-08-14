<template>
	<ul class="seller-list">
		<li v-for="(item , index) in data" class="one-border-bottom" @click="goSellerDetail(item.id)">
			<div class="img">
				<img :src="item.imgPath | imgFilter" />
			</div>
			<div class="sellertop">
				<b class="title">{{item.name}}</b>
				<Rate v-model="item.rating" allow-half class="ratingstar"></Rate>
				<span class="rating">{{item.rating}}</span>
				<span class="ordernum">月售{{item.orderNum}}单</span>
				<div class="sellertop-p">
					<span>￥{{item.amount}}元起送/</span>
					<span>配送￥{{item.delivery}}</span>
					<span>{{item.leadTime}}分钟</span>
				</div>
			</div>
			<div class="seller-active one-border-top" v-if="item.activities">
				<p v-for="(activities,index) in item.activities"  class="seller-active-p" >
					<span :class="{ xin : activities.icon_name == '新'}">{{activities.icon_name}}</span>
					<span>{{activities.description}}</span>
				</p>
			</div>
			<i href="javascript:;" class="active-num" @click.stop="activeclick(index)" v-if="item.activities">{{item.activities.length}}个活动</i>
		</li>
	</ul>

</template>

<script>
	export default{
		props:{
			data : Array
		},
		data(){
			return{
				activeHeight:false
			}
		},
		methods:{
			activeclick(index){
				//监听高度变化
				this.$emit('scroollchange')
				if(this.activeHeight == true){
//					this.activeHeight=false;
					document.getElementsByClassName('seller-active')[index].style.height = '38px';
					this.activeHeight=false;
				}
				else{
//					this.activeHeight=true;
					document.getElementsByClassName('seller-active')[index].style.height = '100%';
					this.activeHeight=true;
				}
				return false;
			},
			goSellerDetail(id){
				this.$router.push('/home/seller-detail/'+id);
			}
		}

	}

</script>

<style>
	.seller-list li{
		width: 100%;
		min-height: 100px;
		position: relative;
		overflow: hidden;
	}
	.seller-list .img{
		width: 85px;
		height: 80px;
		padding: 15px 10px;
		position: absolute;
		top: 0;
		left: 0;

	}
	.seller-list .img img{
		width: 100%;
	}
	.seller-list .title{
		display: block;
		margin-top: 15px;
		font-size: 14px;
	}
	.ratingstar>div{
		margin: 0;
	}
	.seller-list .rating{
		font-size: 10px;
		color: #ff6000;
	}
	.seller-list .ordernum{
		font-size: 10px;
		color: #666;
	}
	.seller-list .sellertop{
		float: right;
		width: 290px;
	}
	.seller-list .sellertop-p{
		font-size: 10px;
		color: #666;
		margin: 6px 0;
	}
	.seller-list .sellertop-p span:nth-of-type(3){
		float: right;
		color: #2395ff;
		margin-right: 10px;
	}
	.seller-active{
		float: right;
		width: 290px;
		height: 38px;
		overflow: hidden;
	}
	.seller-active-p span{
		color: #939393;
		font-size: 8px;
	}
	.seller-active span:nth-of-type(1).xin{
		color: #fff;
		background:#70bc46 ;
	}
	.seller-active span:nth-of-type(1){
		color: #fff;
		background:#f07373 ;
	}
	.active-num{
		color: #939393;
		font-size: 6px;
		position: absolute;
		top: 94px;
		right: 10px;
		font-style: normal;
	}
</style>