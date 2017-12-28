//logs.js
const util = require('../../utils/util.js')
// pages/comp/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ssj:[
//      { ssj: "标题一" },
//      { ssj: "标题二" },
//      { ssj: "标题三" },
//      { ssj: "标题四" },
//      { ssj: "标题五" },
//      { ssj: "标题六" },
//      { ssj: "标题一" },
//      { ssj: "标题二" },
//      { ssj: "标题三" },
//      { ssj: "标题四" },
//      { ssj: "标题五" },
//      { ssj: "标题六" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {
    var that = this;
    // 设置窗口大小



    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
        wx.request({
          url: 'https://infoaas.com/data/1513071001110/ssj.json',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              ssj: res.data.ssj
            })
          }
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

  onUpper: function () { },
  onLower: function () {

/*    var ssj = this.data.ssj
    ssj.push({ ssj: "标题一" },
          { ssj: "标题二" },
          { ssj: "标题三" }
    )
    var that = this;
    that.setData({
      isLower: true,
      ssj:ssj
    });*/
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  }
})