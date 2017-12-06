//dd
Page({
  data: {
    height: 20,
    focus: false
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  },
  formSubmit: function (event) {
    var ggc = {};
    var that = this
    console.log(event)
    ggc.radiogroup = event.detail.value.radiogroup;
    ggc.radiogroup2 = event.detail.value.radiogroup2;
    ggc.input = event.detail.value.input;
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (!ggc.radiogroup || !ggc.radiogroup2 || !ggc.input) {
      console.log(ggc)
      that.setData({
        hasError: true,
        errorText: '选项不能为空'
      })
    } else {
      that.setData({
        hasError: false
      })
      wx.setStorage({

        key: "ggc",
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
  formReset: function () {
    console.log('form发生了reset事件')
  }
})