
Page({
  data: {
    src: '../images/woman2.jpg',
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
      url: '../woman1/woman1?name=' + that.data.name 
    })
  }
})