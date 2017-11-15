// pages/xunfang/xunfang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    fangjian: [
    {
      one: "惠州学院计算机1班今晚是否聚会"
      
    },
    {
      one: "惠州学院设施建议",
      
  
    },
    {
      one: "马庄交警中队举报信箱",

    }]


  },
  more: function (e) {
    console.log(e);
    var xin = {
      one: "没有更多房间了",
     
    }
    if (this.data.fangjian.length <= 4) {
      this.data.fangjian.push(xin)
      this.setData({
        fangjian: this.data.fangjian
      })
    } else {
      console.log("等人创")
    }
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