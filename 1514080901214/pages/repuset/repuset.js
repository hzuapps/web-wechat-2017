//index.js
Page({
  data: {
    title: "加载中...",
    duanzi: [],
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000,
    })

    wx.request({
      url: "https://route.showapi.com/341-1?showapi_appid=52772&showapi_sign=b194edf7f7954d7384666ae477c42fe6&page=1&maxResult=50&",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
          duanzi: data.showapi_res_body.contentlist,
        })
      },
    })

  }
})
