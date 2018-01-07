// pages/now-room/now-room.js
const app = getApp();
const socket = app.globalData.socket;

// 计时器：

// 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
var total_micro_second = 2 * 60 * 1000;

/* 毫秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // 计时结束返回后，向服务器发送计时结束信号
    socket.emit('time-out', { timeOut: true, roomID: that.data.roomID});
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }
    , 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位
  var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return hr + ":" + min + ":" + sec + " " + micro_sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

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
    clock: ''
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
      teacherLocation: options.teacherLoaction
    });

    // 设置本地计时时间：
    total_micro_second = parseInt(options.limitTime.slice(0, 1)) * 60 * 1000;
    //total_micro_second = 10000;
    // 开始计时， 并在计时结束是向服务器发送timeOut信号
    count_down(that);

    // 接收来自服务器发送回来的签到结果
    socket.on('check-in-result', function(feedback) {
      console.log('服务器返回的签到结果，将会渲染到check-in-result页面', feedback);
      // 携带数据跳转到check-in-result页面
      wx.navigateTo({
        url: '../check-in-result/check-in-result' + '?roomID=' + feedback.roomID + '&startNum=' + feedback.startNum + '&endNum=' + feedback.endNum + '&limitTime=' + feedback.limitTime + '&teacherLoaction=' + feedback.teacherLocation + '&studentList=' + feedback.studentList,
        success: function(){
          console.log('老班长很帅');
        }
      })
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

  // 【签到结果】按钮：跳转到res-page。一开始是不可以按的，要等到签到事件结束才能按
  showRes: function () { },

  // 【退出房间】按钮：这个按钮可以中途退出签到房间（即取消签到），并返回首页
  deleteRoom: function () {
    var that = this;
    console.log('老师按了删除房间按钮，这个房间即将被删除');  
    socket.emit('delete-room', that.data.roomID);
    // 删除成功提示
    wx.showLoading({
      title: '删除成功',
      icon: '删除成功',
      duration: 2000
    });  

    setTimeout(function(){
      wx.switchTab({
        url: '../index/index',
      });
    }, 500);
  }
})