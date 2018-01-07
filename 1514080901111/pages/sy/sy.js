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
     /* { title: 1, text: "类型1"},
      { type: 2, text: "类型2" },
      { type: 3, text: "类型3" },
      { type: 4, text: "类型4" },
      { type: 5, text: "类型5" },
    */  
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
    // 从服务器取回来 JSON
    wx.request({
      url: 'https://infoaas.com/data/1514080901128/ComicNew.json',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data.list)
        that.setData({
          hasError: true,
          ranks: res.data.list
        })
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