<template>
	<div class="assess">
		<div class="assess-header">
			<div class="assess-header-left">
				<b>{{Math.round(listdata4.overall_score * Math.pow(10, 1))/ Math.pow(10, 1)}}</b>
				<p>综合评价</p>
				<span>高于周边商家{{Math.round(listdata4.compare_rating * Math.pow(1000, 1))/ Math.pow(10, 1)}}%</span>
			</div>
			<ul class="assess-header-right">
				<li>
					<span>服务评价：</span>
					<Rate v-model="score1" allow-half class="ratingstar"></Rate>
					<b>{{score1}}</b>
				</li>
				<li>
					<span>菜品评价：</span>
					<Rate v-model="score2" allow-half class="ratingstar"></Rate>
					<b>{{score2}}</b>				
				</li>
				<li>
					<span>送达时间：</span>
					{{listdata4.deliver_time}}分钟
				</li>
			</ul>
		</div>
		<div class="assess-title one-border-bottom">
			<p v-for="item in listdata5">{{item.name}}({{item.count}})</p>
		</div>
		<ul class="assess-score">
			<li v-for=" li in listdata3">
				<p>
					<span>{{li.username}}</span>
					{{li.rated_at}}
				</p>
				<p>
					<Rate v-model="li.rating_star" allow-half class="ratingstar2"></Rate>
					<span>{{li.time_spent_desc}}</span>					
				</p>
				<img v-for="li2 in li.item_ratings" :src="li2.image_hash | imgFilter"/>
				<p class="rating-text">{{li.rating_text}}</p>
				<div class="item-ratings">
					<p v-for="li2 in li.item_ratings">{{li2.food_name}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
export default{
	props:{
		listdata3: Array,
		listdata4: Object,
		listdata5: Array
	},
	data(){
		return{
			score1:Math.round(this.listdata4.service_score * Math.pow(10, 1))/ Math.pow(10, 1),
			score2:Math.round(this.listdata4.food_score * Math.pow(10, 1))/ Math.pow(10, 1)

		}
	}
}
</script>

<style>
.assess{
	width: 100%;
	position: absolute;
	top: 190px;
	bottom: 0;
	overflow: auto;
}
.assess-header{
	width: 100%;
	padding: 15px 10px;
	overflow: hidden;
	border-bottom: 10px solid #ddd;
}
.assess-header-left{
	width: 30%;
	float: left;
	text-align: center;
	border-right: 1px solid #ddd;
}
.assess-header-left b{
	font-size: 26px;
	color: #f40;
}
.assess-header-left p{
	font-size: 14px;
}
.assess-header-left span{
	font-size: 10px;
	color: #999;
}
.assess-header-right{
	width: 70%;
	float: left;
}
.assess-header-right li{
	width: 100%;
	padding-left: 20px;
	height: 26px;
	line-height: 26px;
	box-sizing: border-box;
	font-size: 10px;
	color: #999;
}
.assess-header-right b{
	font-size: 14px;
	color: #f40;
}
.assess-header-right span{
	color: #666;
	font-size: 16px;
}
.ratingstar{
	font-size: 16px;	

}
.ratingstar2{
	float: left;
	width: 70px;
	font-size: 14px;	

}
.ratingstar2 div{
	float: left;
	margin: 0;
}
	
.assess-title{
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
}
.assess-title p{
	margin:5px;
	padding:5px;
	height: 30px;
	text-align: center;
	display: inline-block;
	border: 1px solid #ddd;
	border-radius: 7px;
}
.assess-score li{
	width: 100%;
	padding:20px;
	padding-left: 50px;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;
	overflow: hidden;
}
.assess-score li p{
	width: 100%;
	text-align: right;
	font-size: 10px;
	color: #999;
	overflow: hidden;
}
.assess-score li p span{
	float: left;
	font-size: 12px;
	color: #666;
}
.assess-score li img{
	display: inline-block;
	float: left;
	width: 20%;
	margin-right: 10px;
}
.assess-score .rating-text{
	width: 100%;
	text-align: left;
	font-size: 14px;
	color: #666;
	margin: 5px 0;
}
.assess-score .item-ratings p{
	display: block;
	float: left;
	max-width: 50px;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 7px;
	margin: 0 5px;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
</style>