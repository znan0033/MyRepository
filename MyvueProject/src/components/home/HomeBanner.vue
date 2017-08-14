<template>

	<div class="swiper-container banner">
		<div class="swiper-wrapper">
			<ul class="swiper-slide" v-for="pageItem in pageData">
				<li v-for="item in pageItem" class="item" @click="toHomeBannerDetail(item.name)">
					<img :src="item.imgPath | imgFilter"/>
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="swiper-pagination"></div>
	</div>

</template>

<script>
	export default{
		props:{
			data: Array
		},
		computed: {
			pageData(){
				//将外部数据深拷贝为自身数据
				var bannerData = Array.from(this.data);
				var arr = [];
				while(bannerData.length > 0){
					arr.push(bannerData.splice(0,8));
				}
				return arr;
			}
		},
		methods:{
			toHomeBannerDetail(name){
				this.$router.push('/home/homebanner-detail/'+name);
			}
		},
		mounted(){
			//创建swiper
			var bannerSwiper = new Swiper('#Home .banner', {
				pagination: '.swiper-pagination',
			});
			this.$watch('pageData', function(){
				bannerSwiper.update();
			})

		}
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 177px;
		border-bottom: 10px solid #eee;
	}
	.banner .item{
		float: left;
		width: 25%;
		text-align: center;
		margin-top: 16px;
	}
	.banner .item img{
		display: block;
		width: 50%;
		margin: 0 auto;
	}
	.banner .item span{
		text-align: center;
		color: #666;
		font-size: 12px;
	}
	.banner .swiper-pagination-bullets{
		bottom: 2px;
	}
	.swiper-pagination-bullet {
	    width: 4px;
	    height: 4px;
	}
	.swiper-pagination-bullet-active {
	    background: #666;
	}
</style>