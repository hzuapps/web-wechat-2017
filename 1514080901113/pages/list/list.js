Page({
  data: {
    result: {},
  },
  onLoad: function (options) {
    this.getDate('http://baobab.wandoujia.com/api/v2/feed?num=2');
  },
  /**
   * 网络请求的函数：接收一个URL参数
   */
  getDate: function (URL) {
    var that = this;
    // 申请一个网络请求
    wx.request({
      url: URL,
      method: 'GET',
      //添加data
      // data: {
      //  x: '',
      //  y: ''
      //  },
      //添加头信息
      // header: {
      //  'Content-Type': 'application/json'
      // },
      // 请求成功的回调
      success: function (res) {
        that.setData({
          result: res.data
        })
        console.log(res.data)
      }
    })
  },
})
