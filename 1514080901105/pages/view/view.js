// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    match: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.id)

    var that = this
    wx.request({
      url: 'https://infoaas.com/data/1514080901123/json/match.json',
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        that.setData({
          match: res.data.match
        });
        that.data.match = res.data.match
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

  }
})