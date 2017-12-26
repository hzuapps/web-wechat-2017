//index.js
Page({
  data: {
    title: "加载中...",
    gaoxiao_img: [],
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000,
    })

    wx.request({
      url: "https://route.showapi.com/341-2?showapi_appid=52772&showapi_sign=b194edf7f7954d7384666ae477c42fe6&page=1&maxResult=50&",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
          gaoxiao_img: data.showapi_res_body.contentlist,
        })
      },
    })

  },
  //图片点击事件
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: src // 需要预览的图片http链接列表
    })
  }

})
