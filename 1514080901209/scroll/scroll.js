// pages/comp/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    way:[
      {
        name:"用户1",
        autograph:"自信"
      },
      {
        name: "用户2",
        autograph: "努力"
      },
      {
        name: "用户3",
        autograph: "团结"
      },
      {
        name: "用户4",
        autograph: "自立"
      },
      {
        name: "用户5",
        autograph: "自强"
      },
      {
        name: "用户6",
        autograph: "尊重"
      },
      {
        name: "用户7",
        autograph: "和谐"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  }
})