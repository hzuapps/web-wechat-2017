// pages/ripiaofang/ri.js
Page({

  data: {
    ri: [],
    showapi_res_code: []
  },
  onLoad: function () {
    var that = this;

    wx.request({
      url: "https://route.showapi.com/578-2?showapi_appid=49955&showapi_sign=9911fe96a0e747b79ae822f20fedaede&",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          ri: data.showapi_res_body.datalist
        })
      },
    })

  }
})