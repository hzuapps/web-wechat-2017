// pages/now-room-student/now-room-student.js
const app = getApp();
const socket = app.globalData.socket;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomID: null,
    startNum: null,
    endNum: null,
    limitTime: null,
    teacherLoaction: 0,
    studentLocation: 0  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log('页面间传值，来自create-room页面的值', options);
    that.setData({
      roomID: options.roomID,
      startNum: options.startNum,
      endNum: options.endNum,
      limitTime: options.limitTime,
      teacherLocation: options.teacherLoaction,
      checkInNum: options.checkInNum
      // studentLocation: options.studentLocation
    });

    socket.on('all-leave', function(data){
      socket.emit('leave-room', {});
    });  
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

  quitRoom: function() {
    var that = this;
    console.log('学生按了退出房间按钮，即将退出这个房间');
    var quitInfo = {
      roomID: that.data.roomID,
      checkInNum: that.data.checkInNum
    }
    socket.emit('quit-room', quitInfo);
    // 删除成功提示
    wx.showLoading({
      title: '退出成功',
      icon: '退出成功',
      duration: 2000
    });

    setTimeout(function () {
      wx.switchTab({
        url: '../index/index',
      });
    }, 500);    
  }
})