// pages/myinfo/myinfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this;
    
    var inputs=wx.getStorageSync("inputs");
    var count=inputs.length;
    console.log(count)
    that.setData({
      count:count,
    })
      if (app.globalData.userInfo) {
      wx.setStorage({
        key: "userinfo",
        data: app.globalData.userInfo
      })

      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            
          })
        }
      })
    }
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
    var that = this;

    var inputs = wx.getStorageSync("inputs");
    var count = inputs.length;
    console.log(count)
    that.setData({
      count: count,
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
  qingkong:function(){
    wx.clearStorage("inputs")
    var that = this;

    var inputs = wx.getStorageSync("inputs");
    var count = inputs.length;
    console.log(count)
    that.setData({
      count: count,
    })
  }
})