Page({

  /**
   * 页面的初始数据
   */
  data: {
    kemus:[
    {kemu: "语文" },
    {kemu: "数学" },
    {kemu: "英语" },
    {kemu: "物理" },
    {kemu: "化学" },
    {kemu: "生物" },   
  ],
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
  jiazai:function(){
    var that=this;
    wx.showLoading({
      title:"正在加载"
    })
    
    that.setData({
      kemus:that.data.kemus.concat(
       [
        { kemu: "语文" },
        { kemu: "数学" },
        { kemu: "英语" },
        { kemu: "物理" },
        { kemu: "化学" },
        { kemu: "生物" },
      ])

    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000);

  }
})