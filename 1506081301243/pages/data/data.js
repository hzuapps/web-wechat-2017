//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: []
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901103/15140809103.json',
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

  listenerButton: function () {


  }
})
