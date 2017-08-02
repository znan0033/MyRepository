// home.js

import homeServices from '../services/homeServices.js';

Page({
   data: {
    bannerList:[]
  },
   onReady(){
     homeServices.getHomeBannerData(
       (data)=>{
         this.setData({ bannerList: data });
       }
     );
  }
});