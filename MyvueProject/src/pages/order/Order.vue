<template>
	<div id="Order">
		<div class="page ordermain">
			<div class="order-title">
				<b>＜</b>
				<span>订单</span>
			</div>
			<div class="order-main">
				<img src="../../../img/order.gif"/>
			</div>
			<p class="order-tip">登陆后查看外卖订单</p>
			<button class="order-login">立即登录</button>
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
	.ordermain{
		background: #f5f5f5;
	}
	.order-title{
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #0af;
		text-align: center;
		color: #fff;
		position: relative;
	}
	.order-title b{
		width: 50px;
		height: 100%;
		font-size: 30px;
		position: absolute;
		top: 0;
		left:0;
	}
	.order-title span{
		font-size: 20px;
	}
	.order-main{
		width: 100%;
		margin-top: 100px;
	}
	.order-main img{
		display: block;
		width: 55%;
		margin: 0 auto;
	}
	.order-tip{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 18px;
		color: #999;
	}
	.order-login{
		display: block;
		width: 120px;
		height: 40px;
		margin: 0 auto;
		line-height: 40px;
		background: #56d176;
		border: none;
		color: #fff;
		font-size: 16px;
		outline: none;
	}
</style>