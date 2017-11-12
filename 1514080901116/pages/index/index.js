// pages/demo/scrollView.js
var base64 = require("../images/base64");
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
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    })
    that.setData({
      sessions: [{
        name: "",
        msg: "你孤单的时候想干嘛？喝汽水，因为当你孤单你会想起谁（汽水）。"
      }, {
        name: "",
        msg: "我曾经得过精神分裂症，但现在我们已经康复了。"
      }, {
        name: "",
        msg: "你孤单的时候想干嘛？喝汽水，因为当你孤单你会想起谁（汽水）。"
      }, {
        name: "",
        msg: "我曾经得过精神分裂症，但现在我们已经康复了。"
      }, {
        name: "",
        msg: "你孤单的时候想干嘛？喝汽水，因为当你孤单你会想起谁（汽水）。"
      }, {
        name: "",
        msg: "我曾经得过精神分裂症，但现在我们已经康复了。"
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
        name: "",
        msg: "你孤单的时候想干嘛？喝汽水，因为当你孤单你会想起谁（汽水）。"
      }, {
        name: "",
        msg: "我曾经得过精神分裂症，但现在我们已经康复了。"
      }])
    })

  },

  onScroll: function () {
    console.dir("onScroll");
  }
})