Page({
  top250: function () {
    wx.navigateTo({
      url: '../top250/top250'
    })
  },
  ri: function () {
    wx.navigateTo({
      url: '../day/ri'
    })
  },
  zhou:function(){
    wx.navigateTo({
      url:'../week/week'
    })
  },
  zhoumo:function(){
    wx.navigateTo({
      url: '../weekend/weekend',
    })
  },
  yue:function(){
    wx.navigateTo({
      url: '../month/month',
    })
  },
  xinlang:function(){
    wx.navigateTo({
      url: '../new/new',
    })
  },
  piaofang:function(){
    wx.navigateTo({
      url: '../piaofang/piaofang',
    })
  }
});