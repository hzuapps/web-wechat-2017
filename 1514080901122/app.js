/*
签到房间生命周期：
1. 点击“创建房间”后，向服务器发出post请求，服务器发送一个room
2. 服务器收到请求后，创建一个room，然后返回响应（创建成功）
3. room创建的一瞬间就开始计时，在这段时间中，会收到学生的签到请求
4. 如果收到签到请求，根据请求中的房间ID，把该请求中的学号加入到响应ID的房间中，然后返回响应（签到成功）
5. 当签到时间结束时，服务器获取该room的信息并删除该room。返回响应给老师和学生：这个响应中包含了此次签到的信息（房间ID，“签到结束”的信息，没签到的学号）
 */

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    roomCount: 0,
    room: []
  }
})