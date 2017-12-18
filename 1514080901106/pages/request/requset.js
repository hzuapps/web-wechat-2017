// pages/request/requset.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    index: 0,
    show:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data;
    wx.request({
      url: 'https://infoaas.com/data/1514080901101/indexHot.json',
      data: {},
      success: function (res) {
        that.setData({
          name: res.data
        })
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

  getMore:function(){
    console.dir(this.data.name);
    var l = this.data.index;
    var list = this.data.name;
    var temp = this.data.show;
    l += 1;
    console.dir(l);
    this.setData({
      index: l
    })
    var obj = list[l - 1].name;
    console.dir(obj);
    temp.push(obj);
    this.setData({
      show: temp
    })
    console.dir(this.data.show);
  }
})

