// pages/diaryshow/diarshow.js
Page({
  data: {
    title: '',
    diaryTitle: '',
    time: '',
    content: '',
    images: [],
    diaryCount: 0
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的日记列表'
    })
  },
  onShow: function () {
    let that = this;
    let images = wx.getStorageSync("images")
    let content = wx.getStorageSync("diaryContent")
    let diaryTitle = wx.getStorageSync("title")
    let time = wx.getStorageSync("date")
    
    that.setData({
      images: images
    })
    that.setData({
      content: content
    })
    that.setData({
      diaryTitle: diaryTitle
    })
    that.setData({
      time: time
    })
    that.setData({
      location: location
    })
    if (content) {
      that.setData({
        diaryCount: 1
      })
    }
  },
  modify: function () {
    console.log('aaa')
    wx.navigateTo({
      url: "/pages/diaryedit/diaryedit" + this.data.content
    })
  },
  deleteDiary: function () {
    let that = this;
    wx.showModal({
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorage();
          that.setData({
            diaryCount: 0,
            isShow: false
          })
          setTimeout(function () {
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000
            })
          }, 1000)
        } else if (res.cancel) {

        }
      }
    })
  }
})
