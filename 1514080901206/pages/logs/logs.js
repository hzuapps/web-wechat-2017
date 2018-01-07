// pages/demo/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    session: []
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
    that.setData({
      sessions: [{
        icon: "a.png",
        msg: "3.1415"
      }, {
        icon: "b.png",
        msg: "15142"
      }, {
        icon: "a.png",
        msg: "0.984"
      }, {
        icon: "b.png",
        msg: "5687"
      }, {
        icon: "a.png",
        msg: "1356"
      }, {
        icon: "b.png",
        msg: "0.5693"
      }, {
        icon: "a.png",
        msg: "8.963"
      }, {
        icon: "b.png",
        msg: "0.745"
      }]
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

  onEnd: function (e) {
    console.dir(e)
    var that = this;
    that.setData({
      //isLower: true,
      sessions: that.data.sessions.concat([{
        name: "Tom 1111",
        icon: "a.png",
        msg: "您好。"
      }, {
        name: "John 2222",
        icon: "b.png",
        msg: "在吗？"
      }])
    })

  },

  onScroll: function () {
    console.dir("onScroll");
  }
})