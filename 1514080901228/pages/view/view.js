Page({
  notes: [],
  onLoad: function (e) {
    // 设置参数值，也可以是数组元素的一个属性
    this.setData({
      notes: 1
    })
  },
  onLoad: function (options) {
    this.setData({
      notes: options.notes // 这里取到了链接中的参数
    });
    wx.request({
      url: 'https://infoaas.com/data/1514080901228/data.json', //仅为示例
      data: {
        notes: options.notes  // 把取到的id值传到服务器上
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        // 服务器返回了动态内容，如
        that.setData({
          notes: res.data.notes // 这里取到了远程服务器根据不同的id返回的动态内容
        })
      }
    })
  }
})