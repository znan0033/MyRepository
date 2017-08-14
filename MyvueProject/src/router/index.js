import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


//外卖
import Home from '../pages/home/Home.vue'
//外卖子页面
import Address from '../pages/home/Address.vue'   //地址信息
import Search from '../pages/home/Search.vue'    //搜索
import SearchDetail from '../pages/home/SearchDetail.vue'   //搜索详情页
import SellerDetail from '../pages/home/SellerDetail.vue'  // 详情
import HomeBannerDetail from '../pages/home/HomeBannerDetail.vue' //banner详情页
//发现
import Discover from '../pages/discover/Discover.vue'
//积分商城
import PointsShop from '../pages/discover/pointsShop.vue'
//订单
import Order from '../pages/order/Order.vue'

//我的
import Me from '../pages/me/Me.vue'



export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
      	{
		      path: 'address',
		      component: Address
      	},
      	{
		      path: 'search',
		      component: Search
      	},
      	{
		      path: 'search-detail/:word',
		      component: SearchDetail
      	},
      	{
		      path: 'seller-detail/:id',
		      component: SellerDetail
      	},
    		{
    			path: 'homebanner-detail/:name',
    			component: HomeBannerDetail
    		}
      ]
    },
    {
      path: '/discover',
      component: Discover,
      children: [
      	{
      		path: 'points-shop',
      		component: PointsShop
      	}
      ]
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/me',
      component: Me
    },
    {  //重定向
    	path: '*',
    	redirect: '/home'
    }
  ]
})
