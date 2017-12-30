// hzu580/login/login.js
var app = getApp();
Page({
  logIn: function (e) {
    console.log(e)
    var that = this
    wx.request({
      url: 'https://hzu580.cn/Hzu580Server/user_login',
      data: {
        tel: e.detail.value.identity,
        password: e.detail.value.password
      },
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 500) {
          that.openAlert("帐号或密码错误")
        }
        else if (res.statusCode == 200 && res.data == null) {
          that.openAlert("帐号或密码错误")
        }
        else {
          //保存sessionid
          app.globalData.header.Cookie = res.header["Set-Cookie"];
          //缓存jsessionid
          wx.setStorage({
            key: 'header',
            data: res.header["Set-Cookie"],
          })
          //经验值转化等级
          res.data.experience = app.setRank(res.data.experience);
          //缓存个人信息
          wx.setStorage({
            key: 'personInfo',
            data: res.data,
            success: function (res) {
              app.globalData.hasLogin = true
              that.openToast("登录成功")
              wx.switchTab({
                url: '../people/people',
              })
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      }
    })
  },
  register: function () {
    this.openAlert('小程序版本暂未开放注册，请移步网页端hzu580.cn注册账号')
  },
  openToast: function (res) {
    wx.showToast({
      title: res,
      icon: 'success',
      duration: 1000
    });
  },
  openAlert: function (res) {
    wx.showModal({
      content: res,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {

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
    wx.switchTab({
      url: '../index/index',
    })
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

  }
})// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  }
})