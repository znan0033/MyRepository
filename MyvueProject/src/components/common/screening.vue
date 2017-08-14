<template>
	<div class="screening">
		<ul class="screening-list one-border-top">
			<li>配送方式</li>
			<li>
				<span> ☆ 蜂鸟专送</span>
			</li>
			<li>商家属性（可多选）</li>
			<li>
				<span><i style="color: #3fbde6;border-color: #3fbde6;">品</i>品牌商家</span>
				<span><i>保</i>外卖保</span>
				<span><i style="color: #ff4e00;border-color: #ff4e00;">新</i>新店</span>
			</li>
			<li>
				<span><i>票</i>开发票</span>
				<span><i style="color: #ff4e00;border-color: #ff4e00;">付</i>在线支付</span>
				<span><i style="color: #3fbde6;border-color: #3fbde6;">准</i>准时达</span>
				
			</li>
			<li>
				<button>清空</button>
				<button style="background:#56d176 ;color: #fff;border-color: #56d176;">确定</button>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
.screening{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 100px;
	left: 0;
	background: rgba(0,0,0,0.2);
	z-index: 10;
}
.screening-list{
	width: 100%;
	background: #fff;
	padding: 5px 0;
}
.screening-list li{
	width: 100%;
	margin: 5px 0;
	padding: 0 10px;
	box-sizing: border-box;
	font-size: 12px;
}
.screening-list li span{
	display: inline-block;
	width: 25%;
	height: 30px;
	margin: 5px;
	line-height: 30px;
	border: 1px solid #ddd;
	border-radius: 3px;
}
.screening-list li span i{
	display: block;
	width: 12px;
	height: 12px;
	padding: 2px;
	margin: 5px;
	line-height: 12px;
	float: left;
	font-style: normal;
	border: 1px solid #ddd;
	border-radius: 3px;	
}
.screening-list li button{
	width: 49%;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
	background: #fff;
	border: none;
	border: 1px solid #ddd;
	border-radius: 3px;	
	outline: none;
}
</style>