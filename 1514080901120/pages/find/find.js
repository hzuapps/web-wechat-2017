var temp = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      {
        bName: "红楼梦",
        writer: "曹雪芹"
      },
      {
        bName: "三国演义",
        writer: "罗贯中"
      },
      {
        bName: "水浒传",
        writer: "施耐庵"
      },
      {
        bName: "西游记",
        writer: "吴承恩"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll");
    temp = this.data.books.length;
    var ob = {
      bName: "一本新书",
      writer: "新人"
    }
    if (temp < 100) {
      this.data.books.push(ob);
      this.setData({
        books: this.data.books,
      })
    }
  }
})
