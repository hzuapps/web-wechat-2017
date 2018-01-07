// pages/now-room/now-room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomID: null,
    startNum: null,
    endNum: null,
    limitTime: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(options);
    // that.setData({
    //   roomID: options.roomID,
    //   startNum: options.startNum,
    //   endNum: options.endNum,
    //   limitTime: options.limitTime
    // });
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

  // 【签到结果】按钮：跳转到res-page。一开始是不可以按的，要等到签到事件结束才能按
  showRes: function() {},

  // 【退出房间】按钮：这个按钮可以中途退出签到房间（即取消签到），并返回首页
  quitRoom: function() {}
})