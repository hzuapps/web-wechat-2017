// pages/diaredit/diaryedit.js
Page({
  data: {
    picker1Value: 0,
    dateValue: "2017.11.19",
    audioPath: '',
    title:"",
    count:0,
    fontSize: '',
    content: '',
    photos: [],
    
  },
  onLoad: function (query) {
    let that = this;
    wx.setNavigationBarTitle({
      title: '编辑日记'
    })
    console.log(query)
    that.setData({
      content: query.content
    })
    
  },
  
  
  addPhoto: function () {
    let that = this
    wx.chooseImage({
      count: 9, // 可根据情况自由设置，默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        that.setData({
          photos: tempFilePaths
        })
      }
    });
  },
  deletePhoto: function (e) {
    let that = this
    console.log(e.currentTarget.id)
    let id = e.currentTarget.id
    that.data.photos.splice(id, 1)
    that.setData({
      photos: that.data.photos
    })
  },
  datePickerBindchange: function (event) {
    wx.setStorage({
      key: "date",
      data: event.detail.value
    })
    this.setData({
      dateValue: event.detail.value
    })
  },
  
  
  
  input: function (e) {
    let that = this
    // console.log(e.detail.value)
    let content = e.detail.value
    that.setData({
      content: e.detail.value,
      count: e.detail.value.length
    })
  },
  
  save: function (event) {
    let that = this;
    // console.log(event.detail.value);
    var content = event.detail.value;
    console.log(content)
    var title = event.detail.value.title
    
    if (content !== '') {
      wx.setStorage({
        key: "diaryContent",
        data: that.data.content
      });
    }
    wx.setStorage({
      key: 'images',
      data: that.data.photos
    })
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000,
      success: function () {

      }
    });
    setTimeout(function () {
      console.log("wer");
      wx.hideLoading();
      wx.navigateTo({
        url: '../diaryshow/diaryshow',
        success:function(e){console.log(e)},
        fail: function (e) {console.log(e)}
      })
    }, 2000)
    
  },
  titleInput: function (e) {
    let that = this
    let title = e.detail.value
    
    that.setData({
      title: title
    })
    wx.setStorage({
      key: "title",
      data: title
    })
    
  },
})
