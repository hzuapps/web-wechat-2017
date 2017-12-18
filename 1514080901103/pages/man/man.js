
Page({
  data: {
    src: '../images/man2.jpg',
    name: '',
  },
  onLoad: function (query) {
    this.setData({
      name: query.name
    });
  },
  mybutton: function () {
    var that = this;
    wx.redirectTo({
      url: '../man1/man1?name=' + that.data.name 
    })
  }
})