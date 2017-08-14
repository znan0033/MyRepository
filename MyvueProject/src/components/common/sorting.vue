 <template>
 	<div class="sorting">
 		<ul class="sorting-list">
	 		<li class="one-border-top"> ☆ 智能排序</li>
	 		<li class="one-border-top"> ☆ 距离最近</li>
	 		<li class="one-border-top"> ☆ 销量最高</li>
	 		<li class="one-border-top"> ☆ 起送价最低</li>
	 		<li class="one-border-top"> ☆ 配送速度最快</li>
	 		<li class="one-border-top"> ☆ 好评优先</li>
 		</ul>
 	</div>
</template>

<script>
</script>

<style>
.sorting{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 100px;
	left: 0;
	background: rgba(0,0,0,0.2);
	z-index: 10;
}
.sorting .sorting-list{
	width: 100%;
	background: #fff;
}
.sorting .sorting-list li{
	width: 100%;
	height: 50px;
	line-height: 50px;
	padding-left: 16px;
	box-sizing: border-box;
}
</style>