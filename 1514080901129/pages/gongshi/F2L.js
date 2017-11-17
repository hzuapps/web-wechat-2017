// pages/gongshi/F2L.js
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
        name: "F2L1",
        icon: "/pages/images/image_F2L_001.bmp",
        msg: "(RU'R'U)y'(R'U2RU'U')(R'UR)"
      }, {
        name: "F2L2",
        icon: "/pages/images/image_F2L_002.bmp",
        msg: "(U R U' R' U') y'(R' U R)"
      }, {
        name: "F2L3",
        icon: "/pages/images/image_F2L_003.bmp",
        msg: "(R'F'RU)(RU'R'F)"
      }, {
        name: "F2L4",
        icon: "/pages/images/image_F2L_004.bmp",
        msg: "(R U R' U')(RU2 R' U')(R U R')"
      }, {
        name: "F2L5",
        icon: "/pages/images/image_F2L_005.bmp",
        msg: "(RF)U(RU'R'F')(U'R')"
      }, {
        name: "F2L6",
        icon: "/pages/images/image_F2L_006.bmp",
        msg: "y'(R' U' R U)(R' U' R)"
      }, {
        name: "F2L7",
        icon: "/pages/images/image_F2L_007.bmp",
        msg: "(R U' R' U)(R U' R')"
      }, {
        name: "F2L8",
        icon: "/pages/images/image_F2L_008.bmp",
        msg: "(RU'R'U)(RU'U'R'U)(RU'R')"
      }, {
        name: "F2L9",
        icon: "/pages/images/image_F2L_009.bmp",
        msg: "(RU)F(RUR'U')F'R'"
      }, {
        name: "F2L10",
        icon: "/pages/images/image_F2L_010.bmp",
        msg: "y' (R' U R U')(R' U R)"
      }, {
        name: "F2L11",
        icon: "/pages/images/image_F2L_011.bmp",
        msg: "(R U R' U' )(R U R') "
      }, {
        name: "F2L12",
        icon: "/pages/images/image_F2L_012.bmp",
        msg: "(R U R' )2 (R U R')"
      }, {
        name: "F2L13",
        icon: "/pages/images/image_F2L_013.bmp",
        msg: "(R U' R' U) y' (R' U2 R)"
      }, {
        name: "F2L14",
        icon: "/pages/images/image_F2L_014.bmp",
        msg: "y'(R' U2)(R U R' U')R"
      }, {
        name: "F2L15",
        icon: "/pages/images/image_F2L_015.bmp",
        msg: "y'U'(R'U2)(RU'R'UR)"
      }, {
        name: "F2L16",
        icon: "/pages/images/image_F2L_016.bmp",
        msg: "y'(R'URU'U')(R'U'R)"
      }, {
        name: "F2L17",
        icon: "/pages/images/image_F2L_017.bmp",
        msg: "FU(RU'R'F')(RU'R')"
      }, {
        name: "F2L18",
        icon: "/pages/images/image_F2L_018.bmp",
        msg: "U(RU'R'U')(RU'R'U)(RU'R')"
      }, {
        name: "F2L19",
        icon: "/pages/images/image_F2L_019.bmp",
        msg: "(RU'R'U2)(RUR')"
      }, {
        name: "F2L20",
        icon: "/pages/images/image_F2L_020.bmp",
        msg: "U(R U'U')(R' U R U' )R' "
      }, {
        name: "F2L21",
        icon: "/pages/images/image_F2L_021.bmp",
        msg: "(R U'U')(R' U' R U)R'"
      }, {
        name: "F2L22",
        icon: "/pages/images/image_F2L_022.bmp",
        msg: "U'(R U')(R' U2)(R U' R')"
      }, {
        name: "F2L23",
        icon: "/pages/images/image_F2L_023.bmp",
        msg: "U' (R U R') y' (UR' U' R)"
      }, {
        name: "F2L24",
        icon: "/pages/images/image_F2L_024.bmp",
        msg: "y'U(R'U'RU')(R'U'R)"
      }, {
        name: "F2L25",
        icon: "/pages/images/image_F2L_025.bmp",
        msg: "y' (R' U' R)"
      }, {
        name: "F2L26",
        icon: "/pages/images/image_F2L_026.bmp",
        msg: "y'U(R'U'RU')(R'U'R)"
      }, {
        name: "F2L27",
        icon: "/pages/images/image_F2L_027.bmp",
        msg: "y' (R U'U')R'2 U' R2 U' R'"
      }, {
        name: "F2L28",
        icon: "/pages/images/image_F2L_028.bmp",
        msg: "(lU)(rU'r'U')l'"
      }, {
        name: "F2L29",
        icon: "/pages/images/image_F2L_029.bmp",
        msg: "U' (R U'U')(R' U2)(R U' R')"
      }, {
        name: "F2L30",
        icon: "/pages/images/image_F2L_030.bmp",
        msg: "U'(RUR'U')(RU'U'R')"
      }, {
        name: "F2L31",
        icon: "/pages/images/image_F2L_031.bmp",
        msg: "U R U' R'"
      }, {
        name: "F2L32",
        icon: "/pages/images/image_F2L_032.bmp",
        msg: "U' (R U'U' R' U)(R U R')"
      }, {
        name: "F2L33",
        icon: "/pages/images/image_F2L_033.bmp",
        msg: "y'U (R' U' R) d' (R U R')"
      }, {
        name: "F2L34",
        icon: "/pages/images/image_F2L_034.bmp",
        msg: "y'U'(R'UR)"
      }, {
        name: "F2L35",
        icon: "/pages/images/image_F2L_035.bmp",
        msg: "y'U(R'U'RU'U')(R'UR)"
      }, {
        name: "F2L36",
        icon: "/pages/images/image_F2L_036.bmp",
        msg: "y'U (R' U2)(R U'U')(R' U R)"
      }, {
        name: "F2L37",
        icon: "/pages/images/image_F2L_037.bmp",
        msg: "(R U' R' U2)y'( R' U' R)"
      }, {
        name: "F2L38",
        icon: "/pages/images/image_F2L_038.bmp",
        msg: "(RU'R'U)(RU'R'U2)(RU'R')"
      }, {
        name: "F2L39",
        icon: "/pages/images/image_F2L_039.bmp",
        msg: "U'(RUR'U)(RUR')"
      }, {
        name: "F2L40",
        icon: "/pages/images/image_F2L_040.bmp",
        msg: "(R U R')"
      }, {
        name: "F2L41",
        icon: "/pages/images/image_F2L_041.bmp",
        msg: "U' (R U' R' U)(R U R')"
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