Page({

  data: {
    title: "加载中...",
    ri: []
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000,
    })

    wx.request({
      url: "https://route.showapi.com/578-3?showapi_appid=49955&showapi_sign=9911fe96a0e747b79ae822f20fedaede&",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // wx.hideToast();
        var data = res.data;
        //console.log(data);
        that.setData({
          ri: data.showapi_res_body.datalist
        })
      },
    })

  }
})