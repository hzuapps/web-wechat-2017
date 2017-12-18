Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    list:[]
  },
  show: function () {
    var that=this;
    wx.request({
      url:'https://infoaas.com/data/1514080901118/1514080901118.json',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          title:res.data
        });
      }
    })
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