// pages/contents/contents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      way:"",
      id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://infoaas.com/data/1514080901137/demo.json',
      method: 'GET',
      header: {
        'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        that.setData({
          way: res.data.methods[options.id-1].way,
          id:options.id
        });
      }
    });
 }
})  
 