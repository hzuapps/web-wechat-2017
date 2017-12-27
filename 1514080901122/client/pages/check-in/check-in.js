// pages/check-in/check-in.js
const app = getApp();
const socket = app.globalData.socket;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInNum: 0,
    checkInRoomID: 0,
    studentLocation: 0,
    warning: ''
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

  // 点击【创建房间】
  formSubmit: function (e) {
    var that = this; 
    console.log("表单提交数据为：", e.detail.value);

    that.setData({
      checkInNum: e.detail.value.checkInNum,
      checkInRoomID: e.detail.value.checkInRoomID,    
    });

    var joinData = {
      checkInNum: e.detail.value.checkInNum,
      checkInRoomID: e.detail.value.checkInRoomID,
      studentLocation: that.data.studentLocation
    }

    socket.emit('check-in', joinData);

    // 接收来自服务器的签到反馈
    socket.on('check-in-feedback', function (feedback){
      that.setData({
        warning: ''
      });      
      console.log('这次的签到反馈是: ', feedback);

      if (feedback.error == undefined || feedback.error == null) {
        // 创建成功提示
        wx.showLoading({
          title: '签到成功',
          icon: '签到成功',
          duration: 2000
        }); 

        wx.navigateTo({
          url: '../now-room-student/now-room-student' + '?roomID=' + feedback.roomID + '&startNum=' + feedback.startNum + '&endNum=' + feedback.endNum + '&limitTime=' + feedback.limitTime + '&teacherLoaction=' + feedback.teacherLocation + '&checkInNum=' + that.data.checkInNum
        })               
      } else {
        that.setData({
          warning: feedback.error
        });
      }
    });
  },  

  // 点击【重置】
  formReset: function () {
    console.log('form发生了reset事件');
    this.setData({
      warning: "",
      timeIndex: 0
    })
  }     
})