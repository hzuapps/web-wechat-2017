// pages/comp/view.js
Page({
  data: {
    // text:"这是一个页面"
    videoSource: '',
    videoHidden: true
  },

  listenerBtnOpenVideo: function () {
    var that = this;
    wx.chooseVideo({
      //相机和相册
      sourceType: ['album', 'camera'],
      //录制视频最大时长
      maxDuration: 60,
      //摄像头
      camera: ['front', 'back'],
      //这里返回的是tempFilePaths并不是tempFilePath
      success: function (res) {
        console.log(res.tempFilePaths[0])
        that.setData({
          videoSource: res.tempFilePaths[0],
          videoHidden: false
        })
      },
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.dir(options)
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