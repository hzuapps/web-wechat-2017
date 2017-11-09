//index.js
//获取应用实例
const app = getApp()

Page({
    /**
   * 生命周期函数--监听页面初次渲染完成
   */
/*  onReady: function () {
    data:{
      scroll: [
        {
          key: '1',
          url: '',
          imgsrc: '../../example/images/icon_tabbar.png',
          word: '1c'
        },
        {
          key: '2',
          url: '',
          imgsrc: '../../example/images/icon_tabbar.png',
          word: '2c'
        }
      ]
    }
  },*/
  
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    grids: [
      {
        key: '1',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '1'
      },
      {
        key: '2',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '2'
      },
      {
        key: '3',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '3'
      },
      {
        key: '4',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '4'
      },
      {
        key: '5',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '5'
      },
      {
        key: '6',
        url: '',
        imgsrc: '',
        word: '6'
      }
],

    scroll: [
      {
        key: '1',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '1c'
      },
      {
        key: '2',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '2c'
      },
      {
        key: '3',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '3c'
      },
      {
        key: '4',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '4c'
      },
      {
        key: '5',
        url: '',
        imgsrc: '../../example/images/icon_tabbar.png',
        word: '5c'
      },
      {
        key: '6',
        url: '',
        imgsrc: '',
        word: '6c'
      },
      {
        key: '7',
        url: '',
        imgsrc: '',
        word: '7c'
      },
      {
        key: '8',
        url: '',
        imgsrc: '',
        word: '8c'
      },
      {
        key: '9',
        url: '',
        imgsrc: '',
        word: '9c'
      },
      {
        key: '10',
        url: '',
        imgsrc: '',
        word: '10c'
      }
    ]
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
