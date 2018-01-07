function CountDown(that, count) {
  var minutes,seconds;
  minutes = Math.floor(count / 60);
  seconds = Math.floor(count % 60);
  if(seconds < 10)
  {
    seconds = seconds.toString();
    seconds = '0' + seconds;
  }
  that.setData({
    minute: minutes,
    second: seconds
  })
  if(count == 0)
  {
    wx.navigateBack({
      delta: 1,
    })
  }
  var timer = setTimeout(function () {
    count--;
    CountDown(that, count);
  }, 1000);
}   
var animations = wx.createAnimation({
  duration: 25*60*1000,
  // duration: 10000,
  timingFunction: 'linear',
  delay: 0,
  transformOrigin: '50% 50% 0'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:0,
    minute:0,
    animation:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    CountDown(this, 25 * 60);
    animations.scale(0).step();
    this.setData({
      animation: animations.export()
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
    
  }
})