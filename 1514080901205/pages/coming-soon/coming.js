Page({

  data: {
    title: "加载中...",
    movies: [],
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
      //url: "https://api.douban.com/v2/movie/top250",
      url: "https://api.douban.com/v2/movie/coming_soon?count=100",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
          title: data.title,
          movies: data.subjects,
          num: data.total
        })
      },
    })

  }
})