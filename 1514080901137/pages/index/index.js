//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    methods: [],
    imageurl: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var contents = options.id;
    var that = this
    that.setData({
      ways: options.ways
    })
    wx.request({
      url: 'https://infoaas.com/data/1514080901137/demo.json',
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        that.setData({
          methods: res.data.methods,
          imageurl: res.data.methods
        });
        that.data.methods = res.data.methods
      }
    });
  }
})
