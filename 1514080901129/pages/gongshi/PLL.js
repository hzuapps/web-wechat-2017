// pages/gongshi/PLL.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    session: []
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
        name: "PLL1",
        icon: "/pages/images/image_PLL_001.bmp",
        msg: "(R U' R)(U R)2(U' R' U' R2)"
      }, {
        name: "PLL2",
        icon: "/pages/images/image_PLL_002.bmp",
        msg: "(R2 U)(R U)(R' U')2(R' U R')"
      }, {
        name: "PLL3",
        icon: "/pages/images/image_PLL_003.bmp",
        msg: "M'2UM'2U2M'2UM'2"
      }, {
        name: "PLL4",
        icon: "/pages/images/image_PLL_004.bmp",
        msg: "M'U(M'2U)2M'U2M'2U'"
      }, {
        name: "PLL5",
        icon: "/pages/images/image_PLL_005.bmp",
        msg: "x' R2 D2(R' U' R)D2(R' U R')"
      }, {
        name: "PLL6",
        icon: "/pages/images/image_PLL_006.bmp",
        msg: "x'(RU'R)D2(R'UR)D2R'2"
      }, {
        name: "PLL7",
        icon: "/pages/images/image_PLL_007.bmp",
        msg: "x'(R U' R' D)(R U R'D') (R U R'D) (R U'R'D')"
      }, {
        name: "PLL8",
        icon: "/pages/images/image_PLL_008.bmp",
        msg: "(R U R' U')(R' F)(R2 U' R' U')(R U R' F')"
      }, {
        name: "PLL9",
        icon: "/pages/images/image_PLL_009.bmp",
        msg: "(R'U'F')(RUR'U')(R'F)(R2U'R'U')(RUR'UR)"
      }, {
        name: "PLL10",
        icon: "/pages/images/image_PLL_010.bmp",
        msg: "(R' U R' d')(R'F'R2U')(R'UR'FRF)"
      }, {
        name: "PLL11",
        icon: "/pages/images/image_PLL_011.bmp",
        msg: "F(R U'R' U')(R U R' F')(R U R' U')(R' F R F')"
      }, {
        name: "PLL12",
        icon: "/pages/images/image_PLL_012.bmp",
        msg: "z(U' R D')(R2 U R' U' )(R2 U) (DR')"
      }, {
        name: "PLL13",
        icon: "/pages/images/image_PLL_013.bmp",
        msg: "(R U R'F')(R U R'U')(R'F )(R2 U'R'U')"
      }, {
        name: "PLL14",
        icon: "/pages/images/image_PLL_014.bmp",
        msg: "(R' U2)(R U'U')(R' F R U R' U')(R'F' R2 U')"
      }, {
        name: "PLL15",
        icon: "/pages/images/image_PLL_015.bmp",
        msg: "(R U'R'U')(RURD)(R'U'RD')(R'U2R'U')"
      }, {
        name: "PLL16",
        icon: "/pages/images/image_PLL_016.bmp",
        msg: "(R2' u' R U' R)(U R' u)(R2 f R' f')"
      }, {
        name: "PLL17",
        icon: "/pages/images/image_PLL_017.bmp",
        msg: "(R U R')y'(R2' u' R U')(R' U R' u R2)"
      }, {
        name: "PLL18",
        icon: "/pages/images/image_PLL_018.bmp",
        msg: "(R2 u)(R' U R' U')(R u') (R2' F' U F)"
      }, {
        name: "PLL19",
        icon: "/pages/images/image_PLL_019.bmp",
        msg: "(R' d' F)(R2 u)(R' U)(R U' R u' R2)"
      }, {
        name: "PLL20",
        icon: "/pages/images/image_PLL_020.bmp",
        msg: "(R'URU')(R'F'U')(FRUR'F)(R'F'RU'R)"
      }, {
        name: "PLL21",
        icon: "/pages/images/image_PLL_021.bmp",
        msg: "(RUR'U)(RUR'F')(RUR'U')(R'F)(R2U'R'U2)(RU'R')"
      }]
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

  onEnd: function (e) {
    console.dir(e)
    var that = this;
    that.setData({
      //isLower: true,
      sessions: that.data.sessions.concat([{

      }])
    })

  },

  onScroll: function () {
    console.dir("onScroll");
  }
})