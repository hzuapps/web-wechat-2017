// pages/feedback/feedback.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    array: [{
      text: '1',
      description: "第一条通知"
    }, {
      text: '2',
      description: "第一条通知"
    }, {
      text: '3',
      description: "第一条通知"
    }, {
      text: '4',
      description: "第一条通知"
    }, {
      text: '5',
      description: "第一条通知"
    }, {
      text: '6',
      description: "第一条通知"
    }, {
      text: '7',
      description: "第一条通知"
    }, {
      text: '8',
      description: "第一条通知"
    }, {
      text: '9',
      description: "第一条通知"
    }, {
      text: '10',
      description: "第一条通知"
    },
    {
      text: '11',
      description: "第一条通知"
    }],
      hidden: true,
      scrollTop: 0,
      scrollHeight:0


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
          var that = this;
          wx.getSystemInfo({
              success:function(res) {
                     that.setData({
                            scrollHeight:res.windowHeight
              });
                    
      }
      });
         
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
   * 页面上拉触底事件的处理函数*/
   
  onReachBottom: function () {

    {
      hidden: false,
      console.log('加载更多')
   var   newarray=[{
        text: '12',
        description: "第一条通知"
      }, {
        text: '13',
        description: "第一条通知"
      },
      {
        text: '14',
        description: "第一条通知"
      },
      {
        text: '15',
        description: "第一条通知"
      }, {
        text: '16',
        description: "第一条通知"
      }, {
        text: '17',
        description: "第一条通知"
      },
      {
        text: '18',
        description: "第一条通知"
      },
      {
        text: '19',
        description: "第一条通知"
      }];
   this.data.array = this.data.array.concat(newarray);
      
        this.setData({
         
          'array':this.data.array,
          
        });
       
    }
  },
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

})

