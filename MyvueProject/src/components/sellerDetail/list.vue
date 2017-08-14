<template>
	<div class="Seller-list">
		<ul class="Seller-list-left">
			<li v-for="(li ,index1) in data" @click="goindex(index1)" :class=" { choice : index1 == Index}">
				<span>{{li.name}}</span>
			</li>
		</ul>
		<ul class="Seller-list-right">
			<div class="warp">
				<li v-for="(li2 ,index2) in data" class="Seller-list-right-list">
					<b class="Seller-list-right-title">{{li2.name}}<span>{{li2.description}}</span></b>
					<div v-for="(div,index) in li2.foods">
						<img :src="div.image_path | imgFilter"/>
						<div>
							<strong>{{div.name}}</strong>
							<em v-if="div.description != ''">{{div.description}}</em>
							<p>
								<span>月售{{div.month_sales}}份</span>
								<span>好评率{{div.satisfy_rate}}%</span>
							</p>
							<b>￥{{div.specfoods[0].price}}</b>
							<Icon type="plus-circled" size="22" color="#3190e8"/>
						</div>
					</div>
				</li>
			</div>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			data: Array
		},
		data(){
			return{
				Index:'',
				toparr:[],
				contentScroll:null
			}
		},
		methods:{
			goindex(index){
				this.Index = index;
				this.contentScroll.scrollTo(0,-this.toparr[index]);
//				console.log(this.toparr)
			}
		},
		mounted(){
			//创建滚动视图
			this.contentScroll = new IScroll("#SellerDetail .Seller-list-right",{
				probeType:3,
				bounce: false,
				momentum:false
			});
			this.contentScroll.on('scroll', ()=>{
				var y = this.contentScroll.y;
				for (var i=0;i<this.toparr.length; i++) {
					if(y < -this.toparr[i] && y  > -this.toparr[i+1]){
						this.Index = i;
					}
				}
			})



		},
		updated(){
			this.contentScroll.refresh();
			var li = document.getElementsByClassName('Seller-list-right-list');
			var arr = [];
			for (var i=0; i<li.length; i++) {
				var top = li[i].offsetTop;
				arr.push(top);
			}
			this.toparr = arr;
		}

	}
</script>

<style>
	.Seller-list{
		width: 100%;
		position: absolute;
		top: 190px;
		bottom: 0;
		overflow: hidden;
	}
	.Seller-list-left{
		width: 20%;
		height: 100%;
		float: left;
		background: #F5F5F5;
		overflow-y: auto;
	}
	.Seller-list-left li{
		width: 100%;
		height: 60px;
		text-align:center ;
		padding-top: 20px;
		box-sizing: border-box;
		font-size: 12px;
	}
	.Seller-list-right{
		width: 80%;
		height: 100%;
		float: left;
		background: #F5F5F5;
		overflow: hidden;
	}
	.Seller-list-right-title{
		display: inline-block;
		width: 100%;
		height: 30px;
		font-size: 16px;
		line-height: 30px;
		background: #F5F5F5;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.Seller-list-right-title span{
		font-size: 12px;
		font-weight: normal;
		margin-left: 5px;
	}
	.Seller-list-right li{
		width: 100%;
		background: #fff;
		position: relative;
		overflow: hidden;
	}
	.Seller-list-right li div{
		width: 100%;
		min-height: 100px;
		padding: 10px;
		overflow: hidden;
	}
	.Seller-list-right li div div{
		padding: 0;
		padding-left: 10px;
		width: 80%;
		float: right;
	}
	.Seller-list-right li div div b{
		font-size: 14px;
		color: #f40;
	}
	.Seller-list-right li div div i{
		float: right;
	}
	.Seller-list-right li img{
		float: left;
		width: 20%;
	}
	.Seller-list-right li p{
		margin-top: 5px;
	}
	.Seller-list-right li strong{
		display: block;
		float: left;
		width: 100%;
		font-size: 16px;

	}
	.Seller-list-right li div em{
		font-size: 8px !important;
		display: block;
		float: left;
		width: 100%;
		min-height: 30px;
		margin-bottom: 4px;
		overflow: hidden;
		font-style: normal;
	}
	.choice{
		background: #fff;
		border-left: 2px solid #007AFF;
		box-sizing: border-box;
	}
</style>