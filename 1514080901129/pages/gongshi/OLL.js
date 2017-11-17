// pages/gongshi/OLL.js
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
        name: "OLL1",
        icon: "/pages/images/image_OLL_001.bmp",
        msg: "(R U'U') (R2' F R F') U2 (R' F R F') "
      }, {
        name: "OLL2",
        icon: "/pages/images/image_OLL_002.bmp",
        msg: "(F R U R' U' F') (f R U R' U' f') "
      }, {
        name: "OLL3",
        icon: "/pages/images/image_OLL_003.bmp",
        msg: "f(R U R' U')f' U' F(R U R' U')F' "
      }, {
        name: "OLL4",
        icon: "/pages/images/image_OLL_004.bmp",
        msg: "f(R U R' U')f’UF(R U R' U')F'"
      }, {
        name: "OLL5",
        icon: "/pages/images/image_OLL_005.bmp",
        msg: "(r' U2) (R U R'U) r "
      }, {
        name: "OLL6",
        icon: "/pages/images/image_OLL_006.bmp",
        msg: "(r U'U') (R' U' R U' r') "
      }, {
        name: "OLL7",
        icon: "/pages/images/image_OLL_007.bmp",
        msg: "r U R' U R U'U' r' "
      }, {
        name: "OLL8",
        icon: "/pages/images/image_OLL_008.bmp",
        msg: "r' U' R U' R' U2 r "
      }, {
        name: "OLL9",
        icon: "/pages/images/image_OLL_009.bmp",
        msg: "(RUR’U’)(R’F)(R2UR’U’)F’ "
      }, {
        name: "OLL10",
        icon: "/pages/images/image_OLL_010.bmp",
        msg: "(R U R'U)(R'F R F') (RU'U'R')"
      }, {
        name: "OLL11",
        icon: "/pages/images/image_OLL_011.bmp",
        msg: "r'(R2 U R' U)(R U'U' R' U) M’"
      }, {
        name: "OLL12",
        icon: "/pages/images/image_OLL_012.bmp",
        msg: "M’(R’U’RU’)(R’U2RU’)M"
      }, {
        name: "OLL13",
        icon: "/pages/images/image_OLL_013.bmp",
        msg: "f (R U) (R2 U’) (R’ U R U’) f’"
      }, {
        name: "OLL14",
        icon: "/pages/images/image_OLL_014.bmp",
        msg: "R' F R U R' F' R (F U' F') "
      }, {
        name: "OLL15",
        icon: "/pages/images/image_OLL_015.bmp",
        msg: "(r' U' r) (R' U' R U) (r' U r) "
      }, {
        name: "OLL16",
        icon: "/pages/images/image_OLL_016.bmp",
        msg: "(r U r’)(R U R’ U’)(r U’ r’)"
      }, {
        name: "OLL17",
        icon: "/pages/images/image_OLL_017.bmp",
        msg: "(l U’ l’) f  (R2BR’UR’U’f’) "
      }, {
        name: "OLL18",
        icon: "/pages/images/image_OLL_018.bmp",
        msg: "(r UR’U)(R’ U’U’ r’)(r’ U’RU’)(R’ U2 r)"
      }, {
        name: "OLL19",
        icon: "/pages/images/image_OLL_019.bmp",
        msg: "(r’ RU)(RUR’U’ r)(R’2FRF’)"
      }, {
        name: "OLL20",
        icon: "/pages/images/image_OLL_020.bmp",
        msg: "(r UR’U’)M’2U(RU’R’U’)M’"
      }, {
        name: "OLL21",
        icon: "/pages/images/image_OLL_021.bmp",
        msg: "(R U'U') (R' U' R U R' U') (R U' R') "
      }, {
        name: "OLL22",
        icon: "/pages/images/image_OLL_022.bmp",
        msg: "R U'U' (R'2 U') (R2 U') R'2 U' U'R"
      }, {
        name: "OLL23",
        icon: "/pages/images/image_OLL_023.bmp",
        msg: "(R2 D’) (R' U’2) (R’ D) (R U’2 R) "
      }, {
        name: "OLL24",
        icon: "/pages/images/image_OLL_024.bmp",
        msg: "(r U R’ U’)(r’ F R F’)"
      }, {
        name: "OLL25",
        icon: "/pages/images/image_OLL_025.bmp",
        msg: "F'(r U R' U') (r' F R) "
      }, {
        name: "OLL26",
        icon: "/pages/images/image_OLL_026.bmp",
        msg: "(R U'U')( R' U' R U' R' )"
      }, {
        name: "OLL27",
        icon: "/pages/images/image_OLL_027.bmp",
        msg: "(RUR’U)(RU’U’R’)"
      }, {
        name: "OLL28",
        icon: "/pages/images/image_OLL_028.bmp",
        msg: "(r U R' U') (r' R U) (R U' R')"
      }, {
        name: "OLL29",
        icon: "/pages/images/image_OLL_029.bmp",
        msg: "(RUR’U’)(RU’R’F’U’F)(RUR’)"
      }, {
        name: "OLL30",
        icon: "/pages/images/image_OLL_030.bmp",
        msg: "f(RU)(R2U’R’U)(R2U’R’)f’"
      }, {
        name: "OLL31",
        icon: "/pages/images/image_OLL_031.bmp",
        msg: "(r' F' U F) (r U' r' U' r)"
      }, {
        name: "OLL32",
        icon: "/pages/images/image_OLL_032.bmp",
        msg: "(R U)(B' U')(R' U R B R')"
      }, {
        name: "OLL33",
        icon: "/pages/images/image_OLL_033.bmp",
        msg: "(R U R' U') (R' F R F')"
      }, {
        name: "OLL34",
        icon: "/pages/images/image_OLL_034.bmp",
        msg: "(RUR2U’)(R’F)(RURU’F’)"
      }, {
        name: "OLL35",
        icon: "/pages/images/image_OLL_035.bmp",
        msg: "(R UU)(R2' F R F')(R UUR')"
      }, {
        name: "OLL36",
        icon: "/pages/images/image_OLL_036.bmp",
        msg: "(R’U’RU’)(R’URU)(lU’R’U)"
      }, {
        name: "OLL37",
        icon: "/pages/images/image_OLL_037.bmp",
        msg: "F (R U' R'U'R U) (R' F')"
      }, {
        name: "OLL38",
        icon: "/pages/images/image_OLL_038.bmp",
        msg: "(R U R'U) (RU'R'U') (R'F R F')"
      }, {
        name: "OLL39",
        icon: "/pages/images/image_OLL_039.bmp",
        msg: "(RUR’F’U’F)U(RU2R’)"
      }, {
        name: "OLL40",
        icon: "/pages/images/image_OLL_040.bmp",
        msg: "(R' F R U R'U') (F' U R)"
      }, {
        name: "OLL41",
        icon: "/pages/images/image_OLL_041.bmp",
        msg: "(RUR’U)(RU’U’R’)F(RUR’U’)F’"
      }, {
        name: "OLL42",
        icon: "/pages/images/image_OLL_042.bmp",
        msg: "(R'U’ RU')(R’U2R)F(RUR’U’)F’"
      }, {
        name: "OLL43",
        icon: "/pages/images/image_OLL_043.bmp",
        msg: "(B' U') (R' U R B)"
      }, {
        name: "OLL44",
        icon: "/pages/images/image_OLL_044.bmp",
        msg: "f (R U R' U')f'"
      }, {
        name: "OLL45",
        icon: "/pages/images/image_OLL_045.bmp",
        msg: "F (R U R' U') F'"
      }, {
        name: "OLL46",
        icon: "/pages/images/image_OLL_046.bmp",
        msg: "(R' U') R' F R F' (U R)"
      }, {
        name: "OLL47",
        icon: "/pages/images/image_OLL_047.bmp",
        msg: "b’(U’R’UR)2b"
      }, {
        name: "OLL48",
        icon: "/pages/images/image_OLL_048.bmp",
        msg: "F (R U R' U')2 F'"
      }, {
        name: "OLL49",
        icon: "/pages/images/image_OLL_049.bmp",
        msg: "R B'(R2 F)(R2 B) R2 F' R"
      }, {
        name: "OLL50",
        icon: "/pages/images/image_OLL_050.bmp",
        msg: "(r’U)(r2U’r2U’)(r2Ur’)"
      }, {
        name: "OLL51",
        icon: "/pages/images/image_OLL_051.bmp",
        msg: "f (R U R' U')2 f'"
      }, {
        name: "OLL52",
        icon: "/pages/images/image_OLL_052.bmp",
        msg: "(R’F’U’FU’)(RUR’UR)"
      }, {
        name: "OLL53",
        icon: "/pages/images/image_OLL_053.bmp",
        msg: "(r' U2) (R U R'U') (R U R'U) r"
      }, {
        name: "OLL54",
        icon: "/pages/images/image_OLL_054.bmp",
        msg: "(rU'U') (R' U' R U R' U') (R U' r')"
      }, {
        name: "OLL55",
        icon: "/pages/images/image_OLL_055.bmp",
        msg: "(rU’U’R’U’)(r’R2UR’U’)(rU’r’)"
      }, {
        name: "OLL56",
        icon: "/pages/images/image_OLL_056.bmp",
        msg: "(rUr’)(URU’R’)2(r U’r’)"
      }, {
        name: "OLL57",
        icon: "/pages/images/image_OLL_057.bmp",
        msg: "(R U R' U' )M'( U R U' r')"
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