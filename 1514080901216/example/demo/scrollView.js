// pages/demo/scrollView.js
Page({

  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
  /*  wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    })*/
    that.setData({
      sessions: [{
        name: '投票主题',
        open: false
      },
      {
        name: '投票描述（选填）',
        open: false
      },
      {
        name: '请输入选项',
        open: false
      },
      {
        name: '添加选项',
        open: false
      },
      {
        name: '投票截止时间',
        open: false
      },
      {
        name: '允许多选',
        open: false
      },
      {
        name: '允许匿名',
        open: false
      }
      ]
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
  onScroll: function() {
    console.dir("onScroll");
  }
})