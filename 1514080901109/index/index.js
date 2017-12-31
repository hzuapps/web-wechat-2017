//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: 'Hfenru',
    call:'13794575000',
    note: '世界和平',
    count: '世界和平'.length 
  },
  onLoad: function onLoad(options) {
    var _this = this;
    wx.getSystemInfo({
      key: 'input',
      success: function success(res) {
        console.log(res.data.note.length)
        _this.setData({
          text: res.data.text,
          note: res.data.area,
          count: res.data.note.length
        });
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onSubmit : function (event) {
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
            duration: 1000
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

  onChange : function (e) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)
    that.setData({
      count: value.length
    })
  }
})