Page({
  onLoad: function (options) {
    var that = this
      wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  
  onUpper: function () { },

  onLower: function () {
    var that = this
    that.setData({
      isLower: true
    });
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  }
})