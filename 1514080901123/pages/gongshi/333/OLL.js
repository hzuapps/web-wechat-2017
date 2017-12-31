// pages/gongshi/333/OLL.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    OLL: [
      {
        name: "OLL 1",
        gongshi: "01.(R U'U') (R2' F R F') U2 (R' F R F') ",
        image: '/pages/example/images/333gongshi/image_OLL_001.png'
      },
      {
        name: "OLL 2",
        gongshi: "02.(F R U R' U' F') (f R U R' U' f') ",
        image: '/pages/example/images/333gongshi/image_OLL_002.png'
      },
      {
        name: "OLL 3",
        gongshi: "03.f(R U R' U')f' U' F(R U R' U')F' ",
        image: '/pages/example/images/333gongshi/image_OLL_003.png'
      },
      {
        name: "OLL 4",
        gongshi: "04.f(R U R' U')f’UF(R U R' U')F' ",
        image: '/pages/example/images/333gongshi/image_OLL_004.png'
      },
      {
        name: "OLL 5",
        gongshi: "05.(r' U2) (R U R'U) r ",
        image: '/pages/example/images/333gongshi/image_OLL_005.png'
      },
      {
        name: "OLL 6",
        gongshi: "06.(r U'U') (R' U' R U' r') ",
        image: '/pages/example/images/333gongshi/image_OLL_006.png'
      },
      {
        name: "OLL 7",
        gongshi: "07.r U R' U R U'U' r' ",
        image: '/pages/example/images/333gongshi/image_OLL_007.png'
      },
      {
        name: "OLL 8",
        gongshi: "08.r' U' R U' R' U2 r ",
        image: '/pages/example/images/333gongshi/image_OLL_008.png'
      },
      {
        name: "OLL 9",
        gongshi: "09.(RUR’U’)(R’F)(R2UR’U’)F’ ",
        image: '/pages/example/images/333gongshi/image_OLL_009.png'
      },
      {
        name: "OLL 10",
        gongshi: "10.(R U R'U)(R'F R F') (RU'U'R') ",
        image: '/pages/example/images/333gongshi/image_OLL_010.png'
      },
      {
        name: "OLL 11",
        gongshi: "11.r'(R2 U R' U)(R U'U' R' U) M’",
        image: '/pages/example/images/333gongshi/image_OLL_011.png'
      },
      {
        name: "OLL 12",
        gongshi: "12.M’(R’U’RU’)(R’U2RU’)M",
        image: '/pages/example/images/333gongshi/image_OLL_012.png'
      },
      {
        name: "OLL 13",
        gongshi: "13.f (R U) (R2 U’) (R’ U R U’) f’",
        image: '/pages/example/images/333gongshi/image_OLL_013.png'
      },
      {
        name: "OLL 14",
        gongshi: "14.R' F R U R' F' R (F U' F') ",
        image: '/pages/example/images/333gongshi/image_OLL_014.png'
      },
      {
        name: "OLL 15",
        gongshi: "15.(r' U' r) (R' U' R U) (r' U r) ",
        image: '/pages/example/images/333gongshi/image_OLL_015.png'
      },
      {
        name: "OLL 16",
        gongshi: "16.(r U r’)(R U R’ U’)(r U’ r’)",
        image: '/pages/example/images/333gongshi/image_OLL_016.png'
      },
      {
        name: "OLL 17",
        gongshi: "17.(l U’ l’) f  (R2BR’UR’U’f’) ",
        image: '/pages/example/images/333gongshi/image_OLL_017.png'
      },
      {
        name: "OLL 18",
        gongshi: "18.(r UR’U)(R’ U’U’ r’)(r’ U’RU’)(R’ U2 r)",
        image: '/pages/example/images/333gongshi/image_OLL_018.png'
      },
      {
        name: "OLL 19",
        gongshi: "19.(r’ RU)(RUR’U’ r)(R’2FRF’)",
        image: '/pages/example/images/333gongshi/image_OLL_019.png'
      },
      {
        name: "OLL 20",
        gongshi: "20.(r UR’U’)M’2U(RU’R’U’)M’",
        image: '/pages/example/images/333gongshi/image_OLL_020.png'
      },
      {
        name: "OLL 21",
        gongshi: "21.(R U'U') (R' U' R U R' U') (R U' R') ",
        image: '/pages/example/images/333gongshi/image_OLL_021.png'
      },
      {
        name: "OLL 22",
        gongshi: "22.R U'U' (R'2 U') (R2 U') R'2 U' U'R",
        image: '/pages/example/images/333gongshi/image_OLL_022.png'
      },
      {
        name: "OLL 23",
        gongshi: "23.(R2 D’) (R' U’2) (R’ D) (R U’2 R) ",
        image: '/pages/example/images/333gongshi/image_OLL_023.png'
      },
      {
        name: "OLL 24",
        gongshi: "24.(r U R’ U’)(r’ F R F’)",
        image: '/pages/example/images/333gongshi/image_OLL_024.png'
      },
      {
        name: "OLL 25",
        gongshi: "25.F'(r U R' U') (r' F R) ",
        image: '/pages/example/images/333gongshi/image_OLL_025.png'
      },
      {
        name: "OLL 26",
        gongshi: "26.(R U'U')( R' U' R U' R' )",
        image: '/pages/example/images/333gongshi/image_OLL_026.png'
      },
      {
        name: "OLL 27",
        gongshi: "27.(RUR’U)(RU’U’R’)",
        image: '/pages/example/images/333gongshi/image_OLL_027.png'
      },
      {
        name: "OLL 28",
        gongshi: "28.(r U R' U') (r' R U) (R U' R') ",
        image: '/pages/example/images/333gongshi/image_OLL_028.png'
      },
      {
        name: "OLL 29",
        gongshi: "29.(RUR’U’)(RU’R’F’U’F)(RUR’)",
        image: '/pages/example/images/333gongshi/image_OLL_029.png'
      },
      {
        name: "OLL 30",
        gongshi: "30.f(RU)(R2U’R’U)(R2U’R’)f’ ",
        image: '/pages/example/images/333gongshi/image_OLL_030.png'
      },
      {
        name: "OLL 31",
        gongshi: "31.(r' F' U F) (r U' r' U' r) ",
        image: '/pages/example/images/333gongshi/image_OLL_031.png'
      },
      {
        name: "OLL 32",
        gongshi: "32.(R U)(B' U')(R' U R B R') ",
        image: '/pages/example/images/333gongshi/image_OLL_032.png'
      },
      {
        name: "OLL 33",
        gongshi: "33.(R U R' U') (R' F R F') ",
        image: '/pages/example/images/333gongshi/image_OLL_033.png'
      },
      {
        name: "OLL 34",
        gongshi: "34.(RUR2U’)(R’F)(RURU’F’)",
        image: '/pages/example/images/333gongshi/image_OLL_034.png'
      },
      {
        name: "OLL 35",
        gongshi: "35.(R UU)(R2' F R F')(R UUR') ",
        image: '/pages/example/images/333gongshi/image_OLL_035.png'
      },
      {
        name: "OLL 36",
        gongshi: "36.(R’U’RU’)(R’URU)(lU’R’U)",
        image: '/pages/example/images/333gongshi/image_OLL_036.png'
      },
      {
        name: "OLL 37",
        gongshi: "37.F (R U' R'U'R U) (R' F') ",
        image: '/pages/example/images/333gongshi/image_OLL_037.png'
      },
      {
        name: "OLL 38",
        gongshi: "38.(R U R'U) (RU'R'U') (R'F R F') ",
        image: '/pages/example/images/333gongshi/image_OLL_038.png'
      },
      {
        name: "OLL 39",
        gongshi: "39.(RUR’F’U’F)U(RU2R’)",
        image: '/pages/example/images/333gongshi/image_OLL_039.png'
      },
      {
        name: "OLL 40",
        gongshi: "40.(R' F R U R'U') (F' U R)",
        image: '/pages/example/images/333gongshi/image_OLL_040.png'
      },
      {
        name: "OLL 41",
        gongshi: "41.(RUR’U)(RU’U’R’)F(RUR’U’)F’",
        image: '/pages/example/images/333gongshi/image_OLL_041.png'
      },
      {
        name: "OLL 42",
        gongshi: "42.(R'U’ RU')(R’U2R)F(RUR’U’)F’ ",
        image: '/pages/example/images/333gongshi/image_OLL_042.png'
      },
      {
        name: "OLL 43",
        gongshi: "43.(B' U') (R' U R B) ",
        image: '/pages/example/images/333gongshi/image_OLL_043.png'
      },
      {
        name: "OLL 44",
        gongshi: "44.f (R U R' U')f' ",
        image: '/pages/example/images/333gongshi/image_OLL_044.png'
      },
      {
        name: "OLL 45",
        gongshi: "45.F (R U R' U') F' ",
        image: '/pages/example/images/333gongshi/image_OLL_045.png'
      },
      {
        name: "OLL 46",
        gongshi: "46.(R' U') R' F R F' (U R) ",
        image: '/pages/example/images/333gongshi/image_OLL_046.png'
      },
      {
        name: "OLL 47",
        gongshi: "47.b’(U’R’UR)2b",
        image: '/pages/example/images/333gongshi/image_OLL_047.png'
      },
      {
        name: "OLL 48",
        gongshi: "48.F (R U R' U')2 F' ",
        image: '/pages/example/images/333gongshi/image_OLL_048.png'
      },
      {
        name: "OLL 49",
        gongshi: "49.R B'(R2 F)(R2 B) R2 F' R ",
        image: '/pages/example/images/333gongshi/image_OLL_049.png'
      },
      {
        name: "OLL 50",
        gongshi: "50.(r’U)(r2U’r2U’)(r2Ur’)",
        image: '/pages/example/images/333gongshi/image_OLL_050.png'
      },
      {
        name: "OLL 51",
        gongshi: "51.f (R U R' U')2 f' ",
        image: '/pages/example/images/333gongshi/image_OLL_051.png'
      },
      {
        name: "OLL 52",
        gongshi: "52.(R’F’U’FU’)(RUR’UR) ",
        image: '/pages/example/images/333gongshi/image_OLL_052.png'
      },
      {
        name: "OLL 53",
        gongshi: "53.(r' U2) (R U R'U') (R U R'U) r ",
        image: '/pages/example/images/333gongshi/image_OLL_053.png'
      },
      {
        name: "OLL 54",
        gongshi: "54.(rU'U') (R' U' R U R' U') (R U' r') ",
        image: '/pages/example/images/333gongshi/image_OLL_054.png'
      },
      {
        name: "OLL 55",
        gongshi: "55.(rU’U’R’U’)(r’R2UR’U’)(rU’r’)",
        image: '/pages/example/images/333gongshi/image_OLL_055.png'
      },
      {
        name: "OLL 56",
        gongshi: "55.(rU’U’R’U’)(r’R2UR’U’)(rU’r’)",
        image: '/pages/example/images/333gongshi/image_OLL_056.png'
      },
      {
        name: "OLL 57",
        gongshi: "57.(R U R' U' )M'( U R U' r')",
        image: '/pages/example/images/333gongshi/image_OLL_057.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }

})

