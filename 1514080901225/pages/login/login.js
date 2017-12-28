var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null,
    warn:null,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {

      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

    }
    else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
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

  
  onShareAppMessage: function () {
    
  },


  Login : function () {
    if(this.data.username==null||this.data.password==null){
      this.setData({ warn: '请输入正确的用户名和密码！' })
      console.log(this.data.username)
      console.log(this.data.password)
    }
    else{
      app.appData.userinfo = { username: this.data.username, password: this.data.password, }
      wx.switchTab({ url: "../mine/mine", })
    }
  },


  usernameInput : function(event){
    this.setData({username:event.detail.value})
    if (event.detail.value == '')
      this.setData({ username: null })
    console.log(this.data.username)
  }, 


  passwordInput : function (event) {
    this.setData({password: event.detail.value})
    if (event.detail.value=='') 
       this.setData({password:null})
    console.log(this.data.password)
  },
  
  
  getUserInfo: function (e) {
    console.log(e)
    var nickname = e.detail.userInfo.nickName
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    app.appData.userinfo = { username: nickname, password: this.data.password, }
    wx.switchTab({ url: "../mine/mine", })
  }
})