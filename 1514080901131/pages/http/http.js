const app = getApp()
Page({
  data: {
    result: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901131/data.json',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data),
          that.setData({
            result: res.data
          })
      }
    })
  }
})