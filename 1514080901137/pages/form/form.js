// pages/form/form.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    input:"",
    textarea:"",
    num1s:"0",
    num2s:"0"
  },
  submittap:function(e){
    console.log("提交成功！");
  },
  resettap:function(e){
    var that = this;
    that.setData({
      num1s:"0",
      num2s:"0"
    });
    wx.setStorage({
      key: "input",
      data: e.detail.value
    })
  },
  formSubmit: function (e) {
    var textvalue = e.detail.value;
    if (textvalue.input == ""||textvalue.textarea == "") {
      wx.showModal({
        title: '提示',
        content: '文字不能为空！',
        showCancel:false
      })
      
    } else {
      wx.setStorage({
        key: "input",
        data: e.detail.value,
        success: function () {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })

        }
      })
    }
  },
  formReset: function () {
    console.log("复位了");
  },
  num1slength: function (e) {
    var that = this;
    var value = e.detail.value;
    that.setData({
      num1s: value.length
    })
  },
  num2slength: function (e) {
    var that = this;
    var value = e.detail.value;
    that.setData({
      num2s: value.length
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'input',
      success: function (res) {
        //console.log(res.data.area.length)
        that.setData({
          input: res.data.input,
          textarea: res.data.textarea,
          num1s: res.data.input.length,
          num2s: res.data.textarea.length
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
  
  }
})