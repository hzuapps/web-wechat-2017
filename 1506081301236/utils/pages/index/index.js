//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src:'images2.png',
    grids: [0, 1, 2, 3, 4, 5],
    mode: 'scaleToFill',
    sessions: [{      //另加
      name: "歌曲1",
      icon: "a.png",
      msg: "您好。"
    }, {
      name: "歌曲2",
      icon: "b.png",
      msg: "在吗？"
    }, {
      name: "歌曲3",
      icon: "a.png",
      msg: "您好。"
    }, {
      name: "歌曲4",
      icon: "b.png",
      msg: "在吗？"
    }, {
      name: "歌曲5",
      icon: "a.png",
      msg: "您好。"
    }, {
      name: "歌曲6",
      icon: "b.png",
      msg: "在吗？"
    }, {
      name: "歌曲7",
      icon: "a.png",
      msg: "您好。"
    }, {
      name: "歌曲8",
      icon: "b.png",
      msg: "在吗？"
    }]
  
  },
  //事件处理函数
  bindViewTap: function(event) {
    //event.target.dataset.playmode == 1;

    //wx.navigateTo({
    
     // url: '../scrollview/scrollview'
    //})
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

