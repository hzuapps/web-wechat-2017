// pages/feedback/feedback.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
   /*
    array: [{
      title: '通知',
      iconTime:'../../image/buildtime.png',
      readerNum:'0',
      questionNum: '1', 
      buildtime: '2017-12-3'
    }, {
        title: '通知',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '通知',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '通知',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
    },
    {
      title: '1',
      iconTime: '../../image/buildtime.png',
      readerNum: '0',
      questionNum: '1',
      buildtime: '2017-12-3'
    }],*/
      
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
          wx.request({
            url: 'https://infoaas.com/data/1514080901114/feedback.json',
                  header: {
         'content-type': 'application/json' // 默认值
                  },
       success: function (res) {
            console.log(res.data);
            that.setData({
           array: res.data.array
             });
      }
    })

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
   * 页面上拉触底事件的处理函数
   
  onReachBottom: function () {

    {
      hidden: false,
      console.log('加载更多')
   var   newarray=[{
     title: '1',
     iconTime: '../../image/buildtime.png',
     readerNum: '0',
     questionNum: '1',
     buildtime: '2017-12-3'
      }, {
       title: '1',
       iconTime: '../../image/buildtime.png',
       readerNum: '0',
       questionNum: '1',
       buildtime: '2017-12-3'
      },
      {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
      },
      {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
      }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
      }, {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
      },
      {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
      },
      {
        title: '1',
        iconTime: '../../image/buildtime.png',
        readerNum: '0',
        questionNum: '1',
        buildtime: '2017-12-3'
      }];
   this.data.array = this.data.array.concat(newarray);
      
        this.setData({
         
          'array':this.data.array,
          
        });
       
    }
  },*/
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

})

