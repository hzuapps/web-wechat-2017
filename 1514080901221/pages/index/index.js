const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal:'',
    moodList: [{ id: 0, content: '开心，今天真的是元气满满的一天。', img: '', time: '2016年10月2日 00:80' },
    { id: 1, content: '啊，好像要下雨了，我可以选择品读一本书静静地听雨了', img: '', time: '2012年10月2日 00:80' },
    { id: 2, content: '1799604429@qq.com，这个是我的邮箱哦', img: '', time: '2010年10月2日 00:80' }]
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
  onLoad: function (options) {
    var _this = this;
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
