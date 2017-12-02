Page({
  data: {
    history:[]
  },
  more: function (e) {
    var newlog = {
      thems: "这是主题",
      comment: "这是备注"
    };
    //模拟数据
    if (this.data.history.length <= 20) {
      this.data.history.push(newlog)
      this.setData({
        history: this.data.history
      })
    } else {
    }
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5a22726799343b5fc80747a8/1514080901117/1514080901117',
      method: 'GET',
      header: {//请求头
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          history: res.data.history
        })
        console.log(res.data);
        },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  }

}
)