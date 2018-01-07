Page({
  data: {

  },
  onLoad: function () {
    var that = this//这句很重要
    wx.request({
      url: 'https://infoaas.com/data/1514080901222/history.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫images的这个数组中
        that.setData({
          images: res.data.imagelist,
          //res代表success函数的事件对，data是固定的，imagelist是是上面json数据中imagelist

        })
      }
    })


  }
})
