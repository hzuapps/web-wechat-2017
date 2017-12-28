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
  },
  chooseimage1: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
      // wx.navigateTo({
      //   url: '../photo/photo'
      // })
  },
  chooseimage2: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
      // wx.navigateTo({
      //   url: '../photo/photo'
      // })
  }
});