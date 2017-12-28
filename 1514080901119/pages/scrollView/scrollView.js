// pages/demo/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessions: []  
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
    that.setData({
      sessions: [{
        name: "书签",
        icon: "a.png",
        msg : "  共12条"
      }, {
        name: "书讯",
        icon: "a.png",
        msg: "共8条"
        }, {
          name: "读书计划",
          icon: "a.png",
          msg: "数量。"
        }, {
          name: "家有藏书",
          icon: "b.png",
          msg: "数量"
        }, {
          name: "关注书本",
          icon: "a.png",
          msg: "数量。"
        }, {
          name: "添加书本",
          icon: "b.png",
          msg: "数量"
        }, {
          name: "Tom",
          icon: "a.png",
          msg: "您好。"
        }, {
          name: "John",
          icon: "b.png",
          msg: "在吗？"
        }]
    })  
  },
  onLoad: function () {
    var that = this;
    // 从服务器取回来 JSON
    wx.request({
      url: 'https://infoaas.com/data/1514080901128/ComicNew.json',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data.list)
        that.setData({
          hasError: true,
          sessions: res.data.list
        })
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

  onEnd : function(e) {
    console.dir(e)
    var that = this;
    that.setData({
      //isLower: true,
      sessions: that.data.sessions.concat([{
        name: "书签",
        icon: "a.png",
        msg: "共12条"
      }, {
        name: "添加书本",
        icon: "b.png",
        msg: "数量"
      }])
    })
    
  },

  onScroll: function() {
    console.dir("onScroll");
  }
})