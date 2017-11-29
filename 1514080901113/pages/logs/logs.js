//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })


    // text:"这是一个页面"
  },
  //点击保存
  listenFormSubmit: function (e) {
    console.log('listenFormSubmit=', e.detail.value)
  },
  //点击重置
  listenFormReser: function (e) {
    console.log('listenFormReser=', e.detail.value)
  },

  //当选中某一个的时候回调该函数。e.detail.value：获取选中某个radio的value
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }

})

