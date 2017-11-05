//index.js
//获取应用实例
const app = getApp()


var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["图片涂鸦", "空白涂鸦"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
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
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  btn_1: function () {
    wx.navigateTo({
      url: '../blank/blank'
    })
  },
  btn_2: function () {
    wx.navigateTo({
      url: '../other/other'
    })
  },
  btn_3: function () {
    wx.navigateTo({
      url: '../photo/photo'
    })
  },
  btn_4: function () {
    wx.navigateTo({
      url: '../shangchuan/shangchuan'
    })
  }
});