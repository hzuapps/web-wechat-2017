// pages/demo/scrollView.js
Page({

  data: {
    rank: []  
  },

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
      rank: [{
        text: "吐槽",
        review: "不读书了？"
      }, {
        text: "吐槽",
        review: "算了算了，开玩笑的。"
        }, {
          text: "吐槽",
          review: "不读书了？"
        }, {
          text: "吐槽",
          review: "算了算了，开玩笑的。"
        }, {
          text: "吐槽",
          review: "不读书了？"
        }, {
          text: "吐槽",
          review: "算了算了，开玩笑的。"
        }, {
          text: "吐槽",
          review: "不读书了？"
        }, {
          text: "吐槽",
          review: "算了算了，开玩笑的。"
        }]
    })  
  },
  onEnd : function(e) {
    console.dir(e)
    var that = this;
    that.setData({
      rank: that.data.rank.concat([{
        text: "评论", 
        review: "还考不考试？！"
      }, {
          text: "评论",
          review: "人丑多读书！"
      }])
    })
    
  },

  
})