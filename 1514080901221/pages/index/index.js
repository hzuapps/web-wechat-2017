const app = getApp()

Page({
  data: {
    inputShowed: false,
    scrollTop: 100,
    windowHeight: 0,
    inputVal:'',
    moodList: []
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
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }, 
  upper: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  },
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901221/moodList.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        _this.setData({
          moodList: res.data.moodList
        });
      }
    })

    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        _this.setData({
          windowHeight: res.windowHeight
        });
      }
    })
    app.getUserInfo(function (userInfo) {
      console.log(userInfo);
      _this.setData({
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName
      })
    });
  },

  onReady: function () {

  },
  onShow: function () {

  }
})
