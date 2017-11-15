// pages/demo/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: 'top-hoverd-btn',
    eat: '',
    stay: '',
    entertainment: '',
    active: '',
    travel: '',
    business: '',
    other: '',
  },
  toHot: function () {
    console.log('hot');
    this.updateBtnStatus('hot');
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
        name: "正新鸡排（惠州店）",
        icon: "/image/zhengxin.png",
        msg: "小吃快餐"
      }, {
        name: "汤响自助回转火锅百汇",
        icon: "/image/tangxiang.png",
        msg: "火锅自助"
      }, {
        name: "万岁料理回转寿司（港惠店）",
        icon: "/image/wangsui.png",
        msg: "日本菜"
      }, {
        name: "牛排王子咖啡西餐厅（麦地店）",
        icon: "/image/niupai.png",
        msg: "西餐"
      }, {
        name: "零下5度（山水华府店）",
        icon: "/image/tangxiang.png",
        msg: "甜点饮品"
      }, {
        name: "波客派（城上马庄店）",
        icon: "/image/tangxiang.png",
        msg: "炸鸡汉堡快餐"
      }, {
        name: "麦嘉斯（惠大店）",
        icon: "/image/tangxiang.png",
        msg: "小吃快餐"
      }, {
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  toeat: function () {
    console.log('eat');
    this.updateBtnStatus('eat');
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
        name: "正新鸡排（惠州店）",
        icon: "/image/zhengxin.png",
        msg: "小吃快餐"
      }, {
        name: "汤响自助回转火锅百汇",
        icon: "/image/tangxiang.png",
        msg: "火锅自助"
      }]
      })
  },
  tostay: function () {
    console.log('stay');
    this.updateBtnStatus('stay');
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
        name: "万岁料理回转寿司（港惠店）",
        icon: "/image/wangsui.png",
        msg: "日本菜"
      }, {
        name: "牛排王子咖啡西餐厅（麦地店）",
        icon: "/image/niupai.png",
        msg: "西餐"
      }, {
        name: "零下5度（山水华府店）",
        icon: "/image/tangxiang.png",
        msg: "甜点饮品"
      }, {
        name: "波客派（城上马庄店）",
        icon: "/image/tangxiang.png",
        msg: "炸鸡汉堡快餐"
      }, {
        name: "麦嘉斯（惠大店）",
        icon: "/image/tangxiang.png",
        msg: "小吃快餐"
      }, {
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  toentertainment: function () {
    console.log('entertainment');
    this.updateBtnStatus('entertainment');
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
        name: "牛排王子咖啡西餐厅（麦地店）",
        icon: "/image/niupai.png",
        msg: "西餐"
      }, {
        name: "零下5度（山水华府店）",
        icon: "/image/tangxiang.png",
        msg: "甜点饮品"
      }, {
        name: "波客派（城上马庄店）",
        icon: "/image/tangxiang.png",
        msg: "炸鸡汉堡快餐"
      }, {
        name: "麦嘉斯（惠大店）",
        icon: "/image/tangxiang.png",
        msg: "小吃快餐"
      }, {
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  toActive: function () {
    console.log('active');
    this.updateBtnStatus('active');
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
        name: "零下5度（山水华府店）",
        icon: "/image/tangxiang.png",
        msg: "甜点饮品"
      }, {
        name: "波客派（城上马庄店）",
        icon: "/image/tangxiang.png",
        msg: "炸鸡汉堡快餐"
      }, {
        name: "麦嘉斯（惠大店）",
        icon: "/image/tangxiang.png",
        msg: "小吃快餐"
      }, {
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  totravel: function () {
    console.log('travel');
    this.updateBtnStatus('travel');
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
        name: "波客派（城上马庄店）",
        icon: "/image/tangxiang.png",
        msg: "炸鸡汉堡快餐"
      }, {
        name: "麦嘉斯（惠大店）",
        icon: "/image/tangxiang.png",
        msg: "小吃快餐"
      }, {
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  tobusiness: function () {
    console.log('business');
    this.updateBtnStatus('business');
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
        name: "麦嘉斯（惠大店）",
        icon: "/image/tangxiang.png",
        msg: "小吃快餐"
      }, {
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  toOther: function () {
    console.log('other');
    this.updateBtnStatus('other');
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
        name: "武汉鸭脖周鸭客",
        icon: "/image/tangxiang.png",
        msg: "卤味"
      }]
    })
  },
  updateBtnStatus: function (k) {
    this.setData({
      hot: this.getHoverd('hot', k),
      eat: this.getHoverd('eat', k),
      stay: this.getHoverd('stay', k),
      entertainment: this.getHoverd('entertainment', k),
      active: this.getHoverd('active', k),
      travel: this.getHoverd('travel', k),
      business: this.getHoverd('business', k),
      other: this.getHoverd('other', k)
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.toHot();
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

  onEnd: function (e) {
    console.dir(e)
    var that = this;
    that.setData({
      //isLower: true,
      sessions: that.data.sessions.concat([{
        name: "杨排风自助餐厅（港惠店）",
        icon: "/image/yangpaifeng.png",
        msg: "烤肉自助餐"
      }, {
        name: "汤响自助回转火锅（港惠店）",
        icon: "/image/tangxiang.png",
        msg: "火锅自助"
      }])
    })

  },

  onScroll: function () {
    console.dir("onScroll");
  }
})