Page({

  /**
   * 页面的初始数据
   */
  data: {
        inputShowed: false,
      inputVal: "",
      array: [{
        name: "赛事新闻",
        icon: "a.png"
      }, {
        name: "官方资讯",
        icon: "b.png"
      }, {
          name: "赛事新闻",
        icon: "a.png"
      }, {
          name: "官方资讯",
        icon: "b.png"
      }, {
          name: "赛事新闻",
        icon: "a.png"
      }, {
          name: "官方资讯",
        icon: "b.png"
      }, {
          name: "赛事新闻",
        icon: "a.png"
      }, {
          name: "官方资讯",
        icon: "b.png"
      }] 
    },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
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

  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: false
    });
    // load more data
    console.log("onLower")
  },
  onEnd: function (e) {
    console.log(e)
    var that = this;
    that.setData({
      isEnd: true,
      //isLower: true,
      array: that.data.array.concat([{
        name: "赛事新闻",
        icon: "a.png"
      }, {
        name: "官方资讯",
        icon: "b.png"
      },])
    });
    console.log("到这里了：onEnd")
  }
})