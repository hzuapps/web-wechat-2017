Page({
  data: {
    title: "加载中",
    movies: [],
    num: []
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000,
    })
    wx.request({
      url: "https://api.douban.com/v2/movie/top250?count=100",
      //data: {},
      //method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          title: data.title,
          movies: data.subjects,
          num: data.total
        })
      }
    })
  }
})