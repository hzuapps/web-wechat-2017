//index.js
//获取应用实例
const app = getApp()
//navbar
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var base64 = require("../images/base64");//list的图标
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //searchbar
    inputShowed: false,
    inputVal: "",
    //navbar
    tabs: ["推荐", "动画情报", "漫画情报"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,

    inputShowed: false,
    inputVal: "",
    //navbar
    tabs: ["推荐", "动画情报", "漫画情报"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    //swiper
    imgUrls: [
      '../images/01.jpg',
      '../images/02.jpg',
      '../images/03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true
  },
  //事件处理函数
  bindViewTap: function() {
      wx.navigateTo({
        url: '../logs/logs'
      })
  },
  //navbar
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    this.setData({
      icon: base64.icon20
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //searchbar
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
  //navbar
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
  //swiper
})




