Page({

  /**
   * 页面的初始数据
   */
  data: {
    nr:{
     text:"",
     area:""
    }
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var nr = wx.getStorageSync('key')
    var that = this
    that.setData({
      nr: {
        text: nr.text,
        area: nr.area
      }
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
  
  formSubmit: function (e) {
    console.log(e.detail.value);
    var that=this
    that.setData({
     nr:{
       text: e.detail.value.text,
       area: e.detail.value.area
     }
    }),
      wx.setStorage({
        key: "key",
        data: e.detail.value
      })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})