// pages/form/form.js
var CNY
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  onCNYChange:function(e){
     CNY = e.detail.value
  },
  onUSDChange:function(){
    
  },
  
  transclick:function(){
    var that = this;
    wx.request({
      url: 'http://jisuhuilv.market.alicloudapi.com/exchange/convert', 
      data: {
        amount: CNY,
        from: 'CNY',
        to:'USD',
      },
      header: {
        'content-type': 'application/json', // 默认值
        'Authorization': 'APPCODE cd4bf20e4f1b41c092925b86a31624ea'
      },
      success: function (res) {
          that.setData({
            USD_VALUE: res.data.result.camount
          }) 
      },
      
    })
    wx.request({
      url: 'http://jisuhuilv.market.alicloudapi.com/exchange/convert',
      data: {
        amount: CNY,
        from: 'CNY',
        to: 'GBP',
      },
      header: {
        'content-type': 'application/json', // 默认值
        'Authorization': 'APPCODE cd4bf20e4f1b41c092925b86a31624ea'
      },
      success: function (res) {
        that.setData({
          GBP_VALUE: res.data.result.camount
        })
      },

    })
    
   
    
    
    
    
    
  },
  


})