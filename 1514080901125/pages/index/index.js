//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    szb: [
     
    ]
  

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {  
    wx.request({
      url: 'https://infoaas.com/data/1514080901125/index.json',
      data: {

      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          szb: res.data.szb,

        })
        
      }
    })
  },

     
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
