
import api from '../../../utils/api.js';

function getHomeBannerData(callback){
  
  wx.request({
    url: api.homeBannerApi,
    success({data}){
      console.log("请求成功");
      console.log(data);
      // 过滤数据
      var bannerData = data[0].entries.map((item)=>{
        var obj = {};
            obj.name = item.name;
            obj.imgPath = api.imgHostName+item.image_hash+'.jpeg';
            obj.id = item.id;
            return obj;
      });
      var newData = [];
      while(bannerData.length > 0){
        var newArr = bannerData.splice(0,8);
            newData.push(newArr);
      }
      callback(newData);
    },
    fail(){
      console.log('请求失败');
    }
  })
}

export default{
  getHomeBannerData
}