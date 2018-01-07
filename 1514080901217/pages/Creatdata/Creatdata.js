const app = getApp()

Page({
  data: {
    motto: '你最想删除照片',
    result: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://infoaas.com/data/hzc.json',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          result: res.data
        })
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

