//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '菜单',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      showView: true,
      students: [
        {
          sNum: "1",
          name: '鲜虾粥',
          price: '38'
        },
        {
          sNum: "2",
          name: '鱼片粥',
          price: '28'
        },
        {
          sNum: "3",
          name: '兴国米粉鱼',
          price: '12'
        },
        {
          sNum: "4",
          name: '深海龙利鱼',
          price: '16'
        },
        {
          sNum: "5",
          name: '垮多春鱼',
          price: '18'
        },
        {
          sNum: "6",
          name: '酸梅汤',
          price: '16'
        }
      ]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
