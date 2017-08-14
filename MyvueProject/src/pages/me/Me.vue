<template>
	<div id="ME">
		<div class="page me">
			<div class="me-title">
				<b>＜</b>
				<span>我的</span>
			</div>
			<div class="me-header">
				<div class="img">
					<img src="../../../img/me.jpg"/>
				</div>
				<p>登录/注册</p>
				<span>登录后享受更多特权</span>
			</div>
			<div class="main1">
				<div>
					<Icon type="pricetag" size="28" color="rgb(255, 95, 62)"/>
					<p>优惠</p>
				</div>
				<div>
					<Icon type="ribbon-b" size="28" color="rgb(106, 194, 11)"/>
					<p>积分</p>
				</div>
			</div>
			<div class="main2">
				<p class="one-border-bottom"><Icon type="document-text" size="20" color="#0af"/>我的订单</p>
				<p class="one-border-bottom"><Icon type="filing" size="20" color="#f40"/>积分商城</p>
				<p class="one-border-bottom"><Icon type="load-b" size="20" color="rgb(255, 198, 54)"/>饿了么会员卡</p>
			</div>
			<div class="main3">
				<p class="one-border-bottom"><Icon type="document-text" size="20" color="#0af"/>服务中心</p>
				<p class="one-border-bottom"><Icon type="filing" size="20" color="#f40"/>下载饿了么APP</p>				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				listData:''
			}
		},
		methods:{
		}
	}
</script>

<style>
	.me{
		background: #F5F5F5;
	}
	.me-title{
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #0af;
		text-align: center;
		color: #fff;
		position: relative;
	}
	.me-title b{
		width: 50px;
		height: 100%;
		font-size: 30px;
		position: absolute;
		top: 0;
		left:0;
	}
	.me-title span{
		font-size: 20px;
	}
	.me-header{
		width: 100%;
		height: 110px;
		padding-top:30px;
		background: #0af;
		color: #fff;
		box-sizing: border-box;
	}
	.me-header .img{
		float: left;
		width: 60px;
		height: 60px;
		margin:0 20px;
		border-radius: 50%;
		overflow: hidden;
	}
	.me-header .img img{
		width: 100%;
	}
	.me-header p{
		font-size: 22px;
	}
	.me-header span{
		font-size: 14px;
	}
	.main1{
		width: 100%;
		text-align: center;
		overflow: hidden;
		margin-bottom: 10px;
	}
	.main1 div{
		width: 50%;
		float: left;
		background: #fff;
		padding: 15px 0;
	}
	.main1 div:nth-of-type(1){
		border-right: 1px solid #ddd;
		box-sizing: border-box;
	}
	.main1 div p{
		margin: 5px 0;
		font-size: 12px;
	}
	.main2{
		width: 100%;
		overflow: hidden;
		background: #fff;
		padding-left: 30px;
		position: relative;
		margin-bottom: 10px;
	}
	.main2 p{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}
	.main2 i{
		display: block;
		height:100%;
		position: absolute;
		top: 10px;
		left: -20px;
	}
	.main3{
		width: 100%;
		overflow: hidden;
		background: #fff;
		padding-left: 30px;
		position: relative;
		margin-bottom: 10px;
	}
	.main3 p{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}
	.main3 i{
		display: block;
		height:100%;
		position: absolute;
		top: 10px;
		left: -20px;
	}
</style>