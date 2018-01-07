//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showTopTips: false
  },
  onLoad: function (options) {
    var that = this;
    // 设置窗口大小
        wx.request({
          url: 'https://infoaas.com/data/1514080901109/file.json',
          data: {},
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              List: res.data.List
            });
          }
        })
      },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
