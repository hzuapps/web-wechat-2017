Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    list: [
      {
        title: "话题1",
        note: "从2007年开始对做站产生了浓厚的兴趣？",
        time: "2017-11-03 11:15:30"
      },
      {
        title: "话题2",
        note: "阿里云双十一活动，第一波开始了，最低2折起",
        time: "2017-11-03 12:15:30"
      },
      {
        title: "话题3",
        note: "移动端的量真的比PC端的多吗？PC做不下去，我要怎么办？",
        time: "2017-11-03 12:35:30"
      },
      {
        title: "话题4",
        note: "【易购付】实体门店聚合二维码收款",
        time: "2017-11-03 13:15:30"
      },
      {
        title: "话题5",
        note: "半桶水老手的重新做站之路",
        time: "2017-11-03 13:45:30"
      },
      {
        title: "话题6",
        note: "响应式网站模版、企业站模版、营销型网站模版第一站",
        time: "2017-11-04 11:25:30"
      }, {
        title: "话题7",
        note: "塞翁失马，焉知非福！错了吗？",
        time: "2017-11-04 12:35:30"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: false,
      isend: true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  },

  //searchbar
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000//loading时间
    });
    //wx.hideToast();隐藏loading
  },

})