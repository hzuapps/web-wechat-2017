Page({

  /**
   * 页面的初始数据
   */
  data: {
    Info: [{time: '2017 - 01 - 01',info: "快件xxx到达xxx市A区" },
       {time: '2017 - 01 - 02',info: "快件xxx到达xxx市B区" },
        {time:'2017 - 01 - 03',info: "快件xxx到达xxx市C区" },
        { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C1区" },
        { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C2区" },
        { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C3区" },
        { time: '2017 - 01 - 03', info: "快件xxx到达xxx市D区" },
        { time: '2017 - 01 - 03', info: "快件xxx派送中，派送员：xxx" },
        { time: '2017 - 01 - 03', info: "已收件，收件人：XXX" }]
    
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
  return:function(){
      wx.switchTab({
        url: '../index/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
    })
  }
})