// pages/form/form.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    area1: ' ',
    area2: ' ',
    area3: ' ',
    area4: ' ',
    area5: ' ',
   // count: ''.length
    tag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'input',
      success: function (res) {
        //console.log(res.data.area.length)

        that.setData({

          area1: res.data.area1,
          area2:res.data.area2,
          area3:res.data.area3,
          area4:res.data.area4,
          area5: res.data.area5,
          //count: res.data.area.length
        })
      }
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

  },

  onSubmit: function (event) {
    console.dir(event)
    var that = this
    var text = event.detail.value.text
    
      
      wx.setStorage({
        key: "input",
        data: event.detail.value,
        success: function (res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })

        }
      })
    
  },

  
  onChange: function (e) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)
    that.setData({
     // count: value.length
    })
  }
})