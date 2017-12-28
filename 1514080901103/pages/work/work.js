Page({
  data: {
    src: '../images/woman.jpg',
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
      url: '../woman/woman?name=' + that.data.name
    })
  }
})