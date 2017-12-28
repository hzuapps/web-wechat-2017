// pages/notes/notes.js
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
      }
    })
    that.setData({
      sessions: [{
        name: "数据结构",
        icon: "emoji-1.png",
        msg: "computer science"
      }, {
        name: "操作系统",
        icon: "emoji-2.png",
        msg: "computer science"
      }, {
        name: "计算机网络",
        icon: "emoji-3.png",
        msg: "computer science"
      }, {
        name: "单片机",
        icon: "emoji-4.png",
        msg: "computer science"
      }, {
        name: "网页设计",
        icon: "emoji-5.png",
        msg: "computer science"
      }, {
        name: "英语六级",
        icon: "emoji-6.png",
        msg: "others"
      }, {
        name: "微型计算机技术",
        icon: "emoji-7.png",
        msg: "computer science"
      }, {
        name: "企业信息化",
        icon: "emoji-8.png",
        msg: "others"
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
      isLower: true,
      sessions: that.data.sessions.concat([{
        name: "C语言",
        icon: "emoji-1.png",
        msg: "computer science"
      }, {
        name: "C++",
        icon: "emoji-2.png",
        msg: "computer science"
      }, {
        name: "算法分析",
        icon: "emoji-3.png",
        msg: "computer science"
      }, {
        name: "概率论与数理统计",
        icon: "emoji-4.png",
        msg: "others"
      }])
    })
  },
  onScroll: function () {
    console.dir("onScroll");
  }
})