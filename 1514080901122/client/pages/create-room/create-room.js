// pages/create-room/create-room.js
const app = getApp();
const socket = app.globalData.socket;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    limitTimePick: ['2分钟', '3分钟', '5分钟'],
    limitTimeIndex: 0,
    warning: '',
    startNum: 0,
    endNum: 0,
    limitTime: 0,
    teacherLoaction: 0,
    newRoom: null
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

  bindLimitTimeChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      limitTimeIndex: e.detail.value
    })
  },
  
  // 点击【创建房间】
  formSubmit: function(e) {
    var that = this; 
    if (e.detail.value.startNum == "" || e.detail.value.endNum == "") {
      console.log("请填写完整的学号范围。");
      this.setData({
        warning: "请填写完整的学号范围。"
      });
    } else if (parseInt(e.detail.value.startNum) > parseInt(e.detail.value.endNum)) {
      console.log("起始学号必须小于终止学号。");
      this.setData({
        warning: "起始学号必须小于终止学号。"
      });
    } else {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);

      // 创建成功提示
      wx.showLoading({
        title: '创建成功',
        icon: '创建成功',
        duration: 2000
      });

      // 发送到服务器的新房间信息
      var roomData = {
        startNum: e.detail.value.startNum,
        endNum: e.detail.value.endNum,
        limitTime: this.data.limitTimePick[e.detail.value.limitTimeIndex],
        teacherLocation: 0
      };

      // 向服务器发送创建房间事件，携带数据是包括：学号范围，限定时间，（老师当前位置）
      socket.emit('create-room', roomData);

      // 创建完房间后，问服务器拿回房间信息
      socket.on('create-room-feedback', function(feedback) {
        console.log("创建房间成功，房间信息为：", feedback);     
        // 获取新房间的ID
        that.setData({
          newRoom: feedback     
        });
      });

      //渲染页面数据
      this.setData({
        warning: "",
        startNum: e.detail.value.startNum,
        endNum: e.detail.value.endNum,
        limitTime: this.data.limitTimePick[e.detail.value.limitTimeIndex],
        teacherLocation: 0
      });      

      setTimeout(function(){
        //console.log("newRoom:", that.data.newRoom);
        //跳转到now-room页面(由于是异步，所以要设下延时，等服务器的数据发送过来了以后再跳转)
        wx.navigateTo({
          url: '../now-room-teacher/now-room-teacher' + '?roomID=' + that.data.newRoom.roomID + '&startNum=' + that.data.newRoom.startNum + '&endNum=' + that.data.newRoom.endNum + '&limitTime=' + that.data.newRoom.limitTime + '&teacherLoaction=' + that.data.newRoom.teacherLocation
        });        
      }, 500);
    }    
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