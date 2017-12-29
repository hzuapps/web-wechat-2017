// pages/index/Component/FormM/FormM.js
const app = getApp()
Page({
  //初始化数据
  data: {
    array: ['大中国', '美国', '巴西', '小日本'],
    index: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    date: '2016-12-20',
    time: '11:19',
    allValue: '',
    title:' 昵称',
    Number:0,
    id:110,
    id1:0
  },
  //表单提交按钮
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    app.globalData.Number =Number
    this.setData({
      allValue: e.detail.value,
    })
    wx.navigateTo({
      url: '../index/index?Number ={{input1}}'
      //跳转至此页面，并将值分别保存在title与text参数中
    })
  },
  //表单重置按钮
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: ''
    })
  },
  //---------------------与选择器相关的方法
  //地区选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //时间选择
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  
  onLoad: function () {       //触发的对象
      var that = this;
      wx.request({
        url: 'https://infoaas.com/data/1506081301236/mydata.json',//仅为事例，并非真实接口
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data.ID)
          that.setData({
            id: res.data.ID,
            id1:res.data.ID,
            Number:res.data.ID
          })
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