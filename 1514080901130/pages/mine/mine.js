// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    eatData: []
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

  onSubmit: function (event) {



    console.dir(event)
    var that = this
    var text = event.detail.value.text
    if (!text) {
      console.dir(text)
      that.setData({
        hasError: true,
        errorText: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError: false,

        text:event.detail.value.text
      })
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
    }
  },
  onTextChange: function (e) {
    var that = this;
    console.dir(e)
    var text = e.detail.value
    console.dir(text);
    if (!text) {
      that.setData({
        hasError: true,
        errorText: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError: false
      })
    }
  },

  show: function(){
    var that = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901101/eat.json', //仅为示例，并非真实的接口地址
      success: function (res) {
        console.log(res.data)
        that.setData({
          eatData: res.data
        });
      }
    })
  }

})