
Page({
  data: {
    src: '../images/man3.jpg',
    name: '',
  },
  onLoad: function (query) {
    this.setData({
      name: query.name,
    });
  },
  mybutton: function () {
    var that = this;
    wx.redirectTo({
      url: '../form/form'
    })
  }
})