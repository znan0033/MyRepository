<template>
	<div class="page subpage">
		<div class="points-shop-title">
			<b @click="goback()">＜</b>
		</div>
		<p>积分商城</p>
	</div>
</template>

<script>
	//引入数据处理文件
	import discoverServices from '../../services/discoverServices.js'

	export default{
		data(){
			return{
				listData:''
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		},
		created(){
			//请求数据
		}

	}
</script>

<style>
.points-shop-title{
	width: 100%;
	height: 45px;
	line-height: 45px;
	text-align: center;
	color: #ddd;
	position: relative;
}
.points-shop-title b{
	width: 50px;
	height: 100%;
	font-size: 30px;
	position: absolute;
	top: 0;
	left:0;
}
</style>