Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
     */

    hidden: true,
    scrollTop: 0,
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901136/match.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          array: res.data.array
        });
      }
    })

    wx.getSystemInfo({
      success: function (res) {
        //var query_clone = JSON.parse(decodeURIComponent(JSON.stringify(res.data)));
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });

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
   */
  onPullDownRefresh: function () {

  },
  /**
   */
  onShareAppMessage: function () {

  }

})