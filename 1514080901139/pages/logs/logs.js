//logs.js


Page({
  data: {
    inputValue: '',
    textareaValue: '',
    textareaCounter: 0
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
    if (!e.detail.value){

    } else {
      console.log(e)
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
