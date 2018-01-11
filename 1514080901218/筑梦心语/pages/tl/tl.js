
Page({

  data: {
    answer: []
  },

  search: function (e) {
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 1000
    });
    var that = this;
    wx.request({
      url: "https://route.showapi.com/60-27?showapi_appid=54064&info=" + e.detail.value + "&userid=userid&showapi_sign=30983abff32841fc8694ff560874d69c",
      header: {
        "Content-Type": "json"
      },

      success: function (res) {
        var data = res.data;
        console.log(data);
        wx.hideToast();
        that.setData({
          answer: data.showapi_res_body.text,
        })
      }
    })
  },
})