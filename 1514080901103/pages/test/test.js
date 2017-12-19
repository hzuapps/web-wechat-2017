Page({
  data: {
    src: '../images/man.jpg',
    name: '',
  },
  onLoad: function (query) {
    this.setData({
      name: query.name
    });
  },
  mybutton: function ()
  {
    var that = this;
    wx.redirectTo({
      url: '../man/man?name=' + that.data.name
    })
  }
})