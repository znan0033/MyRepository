<template>
	<div class="page subpage">
		<form class="address-title">
			<div class="address-title-top">
				<b @click="goback">＜</b>
				<span>选择地址</span>
			</div>
			<input type="text" placeholder="请输入地址" v-model="keyword">
		</form>
		<ul class="address-list">
			<li v-for="address in addressList" class="one-border-bottom"
				@click="addressSelected(address)">
				<h3>{{address.name}}</h3>
				<p>{{address.address}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//数据处理文件
	import homeServices from '../../services/homeServices.js'

	var timer = null;

	export default{
		data(){
			return{
				keyword:'',
				addressList:[]
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
			addressSelected(info){
				//触发空实例自定义事件
				this.$eventHandle.$emit('get-address', info.name);
				//修改全局状态
				this.$store.dispatch('changeLocation',{
					lg: info.longitude,
					lt: info.latitude
				});
				this.$router.back();

			}
		},
		mounted(){
			//在用户输入一次后和再次输入之间的时间间隔大于500ms就让第一次发送。
			this.$watch('keyword', (newVal, oldVal)=>{
				//清除延时器，就不会发生请求
				clearTimeout(timer);
				//再次创建延时器
				timer = setTimeout(()=>{
					homeServices.seachAddressData(newVal, this.longitude, this.latitude)
					.then((res)=>{//请求成功，接收到地址数据
						this.addressList = res;
					})
				}, 500);
			})
		}
	}
</script>

<style>
	.address-title{
		width: 100%;
		background: #0af;
		text-align: center;
		color: #fff;
	}
	.address-title-top{
		width: 100%;
		height: 45px;
		line-height: 45px;
		position: relative;
	}
	.address-title b{
		width: 50px;
		height: 100%;
		font-size: 30px;
		position: absolute;
		top: 0;
		left:0;
	}
	.address-title input{
		width: 90%;
		height: 30px;
		line-height: 30px;
		border-radius: 30px;
		padding-left: 15px;
		margin: 0 auto;
		border: none;
		margin-bottom: 10px;
		outline:none;
	}
.address-list{
	width: 100%;
	position: absolute;
	top: 80px;
	left: 0;
	bottom: 0;
	overflow: auto;
}
.address-list li{
	padding: 10px 20px;
	box-sizing: border-box;

}
.address-list li h3{
	font-size: 14px;
	line-height: 18px;
	color: #333;
}
.address-list li p{
	font-size: 12px;
	line-height: 14px;
	color: #999;
}
</style>