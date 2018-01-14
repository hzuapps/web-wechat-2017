Page({

  /**
   * 页面的初始数据
   */
  data: {
    kemus: [      
    ]     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    /*wx.getStorage({
      key: 'kemus',
      success: function (res) {
        console.log(res.data)
        that.data.kemus = res.data
        console.log(that.data.kemus+"hhfhfhg")
      }
    })*/
    console.log(wx.getStorageSync('kemus').text)
    that.setData({
      kemus: that.data.kemus.concat(
        
        { 
          text: wx.getStorageSync('kemus').text,
          area: wx.getStorageSync('kemus').area
        }
          
        )

    })
    console.log(that.data.kemus)
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
  jiazai: function () {
    var that = this;
    wx.showLoading({
      title: "正在加载"
    })

    
    setTimeout(function () {
      wx.hideLoading()
    }, 1000);

  }
})