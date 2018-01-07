// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {},
    text: 'hello',
    area: 'world',
    count: 'world'.length
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDate('http://baobab.wandoujia.com/api/v2/feed?num=2');
  },
  getDate: function (URL) {
    var that = this;
    // 申请一个网络请求
    wx.request({
      url: URL,
      method: 'GET',
      //添加data
      // data: {
      //   x: '',
      //   y: ''
      //   },
      //添加头信息
      // header: {
      //   'Content-Type': 'application/json'
      // },
      // 请求成功的回调
      success: function (res) {
        that.setData({
          result: res.data
        })
        console.log(res.data)
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
    if (!text) {
      console.dir(text)
      that.setData({
        hasError: true,
        errorText: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError: false
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

  onChange: function (e) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)
    that.setData({
      count: value.length
    })
  }
,
  //request.js 
  /*makeRequest: function() {
    var self = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=520',
      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        console.log('request success', result)
      }
    })
  }*/
})