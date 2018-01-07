// pages/wordsAndsentences/words.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      words:[{
        word:'text',
        mean:'文字'
      },
        {
          word: 'text',
          mean: '文本'
        },
        {
          word: 'text',
          mean: '文本'
        },
        {
          word: 'text',
          mean: '文本'
        },
        {
          word: 'text',
          mean: '文本'
        }
      ]
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
  //滑到底部时触发改事件
  lower:function(){
    console.log('scroll');
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    that.setData({
      words:that.data.words.concat([{
          word: 'xwh',
          mean: '下午好'
        }
      ])
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000);
  }
})