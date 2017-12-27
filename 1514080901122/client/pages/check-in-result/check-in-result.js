// pages/check-in-result/check-in-result.js
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
    studentLocation: 0,
    studentList: [],
    allSum: 0,
    nowSum: 0,
    absentSum: 0,
    absentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var nowSum = 0, absentSum=0;
    var absentList = [];
    console.log('页面间传值，来自now-room-(teacher/student)页面的值', options);
    for (var i = options.startNum; i <= options.endNum;i++)
      if (options.studentList[i] == true) {
        nowSum++;
      } else {
        absentList.push(i);
        absentSum++;
      }
    that.setData({
      roomID: options.roomID,
      startNum: options.startNum,
      endNum: options.endNum,
      limitTime: options.limitTime,
      teacherLocation: options.teacherLoaction,
      allSum: options.endNum - options.startNum + 1,
      nowSum: nowSum,
      absentSum: absentSum,
      absentList: absentList
      //checkInNum: options.checkInNum
      // studentLocation: options.studentLocation
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

  // returnIndex: function() {
  //   wx.navigateTo({
  //     url: '/pages/now-room-student/now-room-student',
  //   })
  // }
})