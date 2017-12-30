// hzu580/people/people.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    has_login: false,
    has_read: true,
    unfinished_mission: '',
    person_info: '',
    notice_list: '',
    mission_count: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this
    // //判断是否已经登录
    wx.request({
      url: 'https://hzu580.cn/Hzu580Server/user_testAccess',
      header: app.globalData.header,
      data: {},
      success: function (e) {
        console.log(e)
        if (e.data == "succeed") {
          that.setData({
            hasLogin: true
          })
          //从缓存中获得个人信息
          wx.getStorage({
            key: 'personInfo',
            success: function (res) {
              that.setData({
                has_login: true,
                personInfo: res.data
              })
              that.people(res.data.uid)
            },
          })
          app.globalData.hasLogin = true
        }
      }
    })
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
  onPullDownRefresh: function () {

  },
  check_in: function () {
    var that = this
    wx.request({
      url: 'https://hzu580.cn/Hzu580Server/user_sign',
      header: app.globalData.header,
      success: function (res) {
        that.setData({
          "check": "已签到",
          "person_info.has_sign": true,
          "person_info.score": that.data.person_info.score + 2
        })
        that.openToast()
      }
    })
  },
  openToast: function () {
    wx.showToast({
      title: '签到成功',
      icon: 'success',
      duration: 2000
    });
  },
  openToastService: function () {
    wx.showToast({
      title: '暂无客服',
      icon: 'loading',
      duration: 2000
    });
  },

})