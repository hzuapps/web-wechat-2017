//index.js
//获取应用实例
var app = getApp()
var types = ['default','primary','warn']
var pageObject = {
  data:{
    defaultSize:'default',
    primarySize:'default',
    warnSize:'default',
    disabled:false,
    plain:false,
    loading:false
  },
  setDisabled:function(e){
    this.setData({
      disabled:!this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  }
}
for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '/images/1.png'
      }, {
        link: '/pages/logs/logs',
        url: '/images/2.png'
      }, {
        link: '/pages/navigation/navigation',
        url: '/images/3.png'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad test');
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
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  toNotes:function(){
    //点击按钮，实现页面跳转到内容页
    wx.navigateTo({
      url: '../notes/notes',
    })
  }
})  
