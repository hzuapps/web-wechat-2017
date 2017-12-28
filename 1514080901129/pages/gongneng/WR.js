// pages/gongneng/WR.js
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
       wx.request({
      url: 'https://infoaas.com/data/1514080901129/json/WR.json',
            header: {
       'content-type':'application/json;charset=utf-8'
           },
     success: function (res) {
       that.setData(
         that.data=res.data
            );
            console.log(that)
        }
      
     }) 
    /*that.setData({
      sessions: [{
        name: "三阶单次",
        icon: "/pages/images/333.png",
        msg: "4.59 SeungBeom Cho 韩国",
        uri:"/pages/gongneng/WR"
      }, {
        name: "三阶平均",
        icon: "/pages/images/333.png",
        msg: "5.80	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "二阶单次",
        icon: "/pages/images/222.png",
        msg: "0.49 Maciej Czapiewski	波兰",
        uri: "/pages/gongneng/WR"
      }, {
        name: "二阶平均",
        icon: "/pages/images/222.png",
        msg: "1.42 Kevin Gerhardt 德国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "四阶单次",
        icon: "/pages/images/444.png",
        msg: "19.36	Feliks Zemdegs	澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "四阶平均",
        icon: "/pages/images/444.png",
        msg: "23.03	Sebastian Weyer	德国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "五阶单次",
        icon: "/pages/images/555.png",
        msg: "38.52	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "五阶平均",
        icon: "/pages/images/555.png",
        msg: "43.21	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "六阶单次",
        icon: "/pages/images/666.png",
        msg: "1:20.03	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "六阶平均",
        icon: "/pages/images/666.png",
        msg: "1:27.79	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "七阶单次",
        icon: "/pages/images/777.png",
        msg: "2:06.73	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "七阶平均",
        icon: "/pages/images/777.png",
        msg: "2:14.04	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "三盲单次",
        icon: "/pages/images/3bf.png",
        msg: "17.87	Max Hilliard 美国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "三盲平均",
        icon: "/pages/images/3bf.png",
        msg: "22.36	Angelo Zhang 美国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "最少步单次",
        icon: "/pages/images/3fm.png",
        msg: "19 Tim Wong 美国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "最少步平均",
        icon: "/pages/images/3fm.png",
        msg: "24.00	Sébastien Auroux 德国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "三单单次",
        icon: "/pages/images/3oh.png",
        msg: "6.88 Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "三单平均",
        icon: "/pages/images/3oh.png",
        msg: "10.21	Feliks Zemdegs 澳大利亚",
        uri: "/pages/gongneng/WR"
      }, {
        name: "脚拧单次",
        icon: "/pages/images/3wf.png",
        msg: "20.57	Jakub Kipa Poland波兰",
        uri: "/pages/gongneng/WR"
      }, {
        name: "脚拧平均",
        icon: "/pages/images/3wf.png",
        msg: "26.84	Jimin Byeon 韩国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "魔表单次",
        icon: "/pages/images/clk.png",
        msg: "3.73 Nathaniel Berg 瑞典",
        uri: "/pages/gongneng/WR"
      }, {
        name: "魔表平均",
        icon: "/pages/images/clk.png",
        msg: "5.22 钟泰然 中国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "五魔方单次",
        icon: "/pages/images/mega.png",
        msg: "29.93	Juan Pablo Huanqui 秘鲁",
        uri: "/pages/gongneng/WR"
      }, {
        name: "五魔方平均",
        icon: "/pages/images/mega.png",
        msg: "35.15	Juan Pablo Huanqui 秘鲁",
        uri: "/pages/gongneng/WR"
      }, {
        name: "金字塔单次",
        icon: "/pages/images/py.png",
        msg: "1.28 Benjamin Kyle	加拿大",
        uri: "/pages/gongneng/WR"
      }, {
        name: "金字塔平均",
        icon: "/pages/images/py.png",
        msg: "2.04 Drew Brads 美国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "斜转单次",
        icon: "/pages/images/sk.png",
        msg: "1.10 Jonatan Kłosko 波兰",
        uri: "/pages/gongneng/WR"
      }, {
        name: "斜转平均",
        icon: "/pages/images/sk.png",
        msg: "2.51 Jonatan Kłosko 波兰",
        uri: "/pages/gongneng/WR"
      }, {
        name: "SQ1单次",
        icon: "/pages/images/sq.png",
        msg: "5.73 Charlie Stark	英国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "SQ1平均",
        icon: "/pages/images/sq.png",
        msg: "8.38 冯子甲 中国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "四盲",
        icon: "/pages/images/4bf.png",
        msg: "1:34.66	林恺俊 中国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "五盲",
        icon: "/pages/images/5bf.png",
        msg: "3:47.50 林恺俊 中国",
        uri: "/pages/gongneng/WR"
      }, {
        name: "多盲",
        icon: "/pages/images/mbf.png",
        msg: "41/41 54:14	Marcin Kowalczyk 波兰",
        uri: "/pages/gongneng/WR"
      }]
    })*/
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