const app = getApp()

Page({

  data: {
    list: [
      {
        colour1: "白色",
        colour2: 'white'
      },
      {
        colour1: "黑色",
        colour2: 'black'
      },
      {
        colour1: "红色",
        colour2: 'red'
      },
      {
        colour1: "蓝色",
        colour2: 'blue'
      },
      {
        colour1: '紫色',
        colour2: 'purple'
      },
      {
        colour1: '绿色',
        colour2: 'green'
      },
      {
        colour1: '橙色',
        colour2: 'orange'
      },
      {
        colour1: '银白色',
        colour2: 'rgb(192,192,192)'
      }
    ],


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
    console.log("onScroll")
  }
  }
})