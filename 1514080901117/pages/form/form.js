Page({
  data: {
    text: 'xxxxx',
    area: 'xxxxx',
    count: 'area'.length
  },
  formsubmit: function (event) {
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
        success: function () {
          console.log('hahahahaha')
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })

        }
      })
    }
  },
  onLoad: function (){
    var that = this;
    wx.getStorage({
      key: 'input',
      success: function (res){
        console.log(res.data.area.length)

        that.setData({
          text: res.data.text,
          area: res.data.area,
          count: res.data.area.length
        })
      }
    })
  },
  countlength: function (e){
    var that = this;
    var value = e.detail.value;
    console.dir(e)
    that.setData({
      count: value.length
    })
  }
})