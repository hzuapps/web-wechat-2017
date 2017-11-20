// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    items: [{ one: "scroll-view", }, { one: "2017.7.25" }, { one: "2017.8.2" }, { one: "2017.8.16" }, { one: "2017.9.1" }, { one: "2017.9.2" }, { one: "2017.9.15" }, { one: "2017.10.1" }, { one: "2017.10.2" }, { one: "2017.10.25" }, { one: "2017.10.26" }]

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
 Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    list: [
      {
        title: "攻略1",
        note: "如何在配兵攻城中获得优胜？",
      },
      {
        title: "攻略2",
        note: "如何有效对待撞田问题？",
      },
      {
        title: "攻略3",
        note: "如何合理地分配资源田矿？",
      },
      {
        title: "攻略4",
        note: "科技的优先升级情况",
      },
      {
        title: "攻略5",
        note: "对于充值最大利益点",
      },
      {
        title: "攻略6",
        note: "对于武将的优先升级分析",
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