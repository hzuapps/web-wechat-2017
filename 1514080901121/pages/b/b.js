Page({
onSubmit: function(event) {
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

onTextChange: function(e) {
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

onChange: function(e) {
  var that = this;
  var value = e.detail.value;
  console.dir(value)
  that.setData({
    count: value.length
  })
}
})