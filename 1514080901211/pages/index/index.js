const app = getApp()
  
  Page({
  data: {
     result: []
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
      }
})
