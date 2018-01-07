const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2017-09-01",
    count: ''.length,
    input:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
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
        errorText: '标题不能为空！'
      })
    } else {
      that.setData({
        hasError: false,
        //date: new Date()
      })
      console.log(event.detail.date)
      console.log(event.detail.value)
      var input=event.detail.value
      
      console.log("abc")
      console.log(event.detail.value)
      /*wx.setStorage({
        key: "input",
        data: event.detail.value,
        success: function (res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          console.dir(event.detail.value)
        }
      })*/
      var inputs =wx.getStorageSync("inputs")||[]
      inputs.unshift(input);
      wx.setStorageSync('inputs', inputs);
      wx.switchTab({
        url: '../show/show',
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
        errorText: '标题不能为空！'
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
  },
  bindDateChange: function (event) {
    this.setData({
      date: event.detail.value
    })
    console.log(event.detail.value)
  },
})

