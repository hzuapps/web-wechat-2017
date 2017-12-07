function CountDown(that, count) {
  var minutes,seconds;
  minutes = Math.floor(count / 60);
  seconds = Math.floor(count % 60);
  that.setData({
    minute: minutes,
    second: seconds
  })
  setTimeout(function () {
    count--;
    CountDown(that, count);
  }, 1000);
}   



Page({

  /**
   * 页面的初始数据
   */
  data: {
    second:0,
    minute:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    CountDown(this,25*60)
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