Page({

  data: {
    title: "加载中...",
    new1: [],
    num: []
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000,
    })

    wx.request({
      url: "http://route.showapi.com/254-1?showapi_appid=51104&showapi_sign=9a22dc0f9168441dbd148ed5fd8d60c7&typeId=18&space=day&key=&date=&page=1&",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
          new1: data.showapi_res_body.pagebean.contentlist,
          title:"微博电影风云榜"
        })
      },
    })

  }
})