//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //search
    inputShowed: false,
    inputVal: "",
    diary: [
      {
        d_title: "高级网页设计",
        d_desc: "作业：完成实验报告。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "微机",
        d_desc: "预习实验3，4。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "计算机网络",
        d_desc: "作业：完成静态路由。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "操作系统",
        d_desc: "作业：第4，5章课后题告。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "概率论",
        d_desc: "作业：习题7、8、9。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "计算机图形学",
        d_desc: "作业：完成实验2。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "单片机",
        d_desc: "作业：这个星期完成大作业。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "Linux",
        d_desc: "作业：完成实验4，5。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "计算方法",
        d_desc: "作业：完成实验5。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "算法分析",
        d_desc: "作业：做课程设计。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "额外",
        d_desc: "《习近平的知青岁月》观后感。",
        d_time: "2017-11-15 21:15:31"
      },
      {
        d_title: "高级网页设计",
        d_desc: "作业：完成实验报告。",
        d_time: "2017-11-15 21:15:31"
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
      isLower: false,
      isend: true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  },

  //searchbar
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }

})