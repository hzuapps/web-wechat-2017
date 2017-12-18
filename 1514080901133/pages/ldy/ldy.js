//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    /*搜索栏数据 */
    inputShowed: false,
    inputVal: "",
    /************ */
    ranks: [
    ],
    //scroll-view变量start
    windowHeight: 0,
    windowWidth: 0,
    scrollTop: 10,
    //scroll-view表里end

  },
  /*搜索栏函数*/
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  /********* */
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    var that = this;
    //获取窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
      },
      fail: (res) => ({

      }),
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://infoaas.com/data/1514080901133/ranks.json',
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        that.setData({
          ranks: res.data.ranks
        });
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  //scroll-view相关函数start
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {

  },
  tap: function (e) {

  },
  tapMove: function (e) {
  },
  //scroll-view相关函数end

})