//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showTopTips: false},

  

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /*onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
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
  },*/
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
      List: [{ id: 1,
       text: '生活就像海洋' },
      { id: 2, 
      text: '只有意志坚强的人' },
      { id: 3, 
      text: '生活就像海洋' },
      { id: 4, 
      text: '才能到达彼岸' },
      { id: 5,
       text: '只有意志坚强的人' },
      { id: 6, 
      text: '才能到达彼岸' },
      { id: 7,
       text: '生活就像海洋' },
      { id: 8, 
      text: '只有意志坚强的人' },
      { id: 9, 
      text: '生活就像海洋' }]
    })
  },
  
  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: false,
      isend: true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  },
  showInput: function () {
        this.setData({
       inputShowed: true
          });
  },
  hideInput: function () {
        this.setData({
       inputVal: "",
            inputShowed: false
          });
  },
  onReachBottom: function () {
        },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
