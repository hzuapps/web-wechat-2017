//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log(options);
    var contents = options.id;
    var that = this
    wx.request({
      url: 'https://infoaas.com/data/1514080901128/listcomic.json',
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        that.setData({
          list: res.data.list1710,
        });
        that.data.list = res.data.list1710
      }
    })
  }
   
})
