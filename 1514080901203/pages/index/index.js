//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    kdValues: ['顺丰速运','邮政ems','天天快递','圆通快递','申通快递','中通快递','京东快递','其他'],
    kdValueIndex:3,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindkdValueChange: function (e) {

    this.setData({
      kdValueIndex: e.detail.value
    })
  },
  showInfo: function(){
    wx.navigateTo({
      url: '../kdInfo/kdInfo',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
