const app = getApp()
Page({
  onLoad: function (options) {
    var GroupKey = options.GroupKey
    console.log(GroupKey)
    if(GroupKey=="2"||GroupKey=="4")
    {
      this.setData({
        button_status: !this.data.primary,
        text: "已加入",
        num: "21",
      }) 
    }
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗,Key=' + GroupKey,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
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
  }
  ,
  data:{
    button_status:"primary",
    text:"加入",
    detail: "4人一组",
    num:"20",
    group_1:[
      { name: "小明", key: "1" }, { name: "王强", key: "2" }, { name: "小可", key: "3"}
    ]
  }
  
  ,
  join:function(e){
    var ddd;
    this.setData({
      button_status: !this.data.primary,    
      text:"已加入"  ,
      num:"21",
    }) 
    wx.showModal({
      title: '提示',
      content: '这是一个假的已加入',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
    try {
      wx.setStorageSync('userin', 'userin')
    } catch (e) {
    }
  }
  ,
    getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

});