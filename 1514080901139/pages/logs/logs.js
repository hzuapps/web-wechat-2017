//logs.js


Page({
  data: {
    inputValue: '',
    textareaValue: '',
    textareaCounter: 0,

    hasError: false,
    errorText: '文字不能为空！'
  },
  onLoad: function () {
    let that = this

    wx.getStorage({
      key: 'form',
      success: function (res) {
        console.log(res.data)
        that.setData({
          inputValue: res.data.input,
          textareaValue: res.data.textarea,
          textareaCounter: res.data.textareaCounter
        })
      },
    })
  },

  // 自定义函数
  // 表单提交
  onFormSumit: function (e) {
    if (!e.detail.value.input || !e.detail.value.textarea){
      this.setData({
        hasError: true
      })
    } else {
      console.log(e)
      this.setData({
        hasError: false
      })
      let value = e.detail.value
      value.textareaCounter = this.data.textareaCounter
      wx.setStorage({
        key: 'form',
        data: e.detail.value,
        success: function () {
          console.log("hahahaha")
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
          })
        }
      })
    }
  },

  // 文本域输入
  textareaInput: function (e) {
    console.log(e)
    this.setData({
      textareaCounter: e.detail.cursor
    })
  }
})
