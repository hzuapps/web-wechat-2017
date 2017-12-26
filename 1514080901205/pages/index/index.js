Page({

  data: {
    title: "加载中...",
    movies: [],
    num: [],
    movies1:[],
    coming_movies1:[],
    coming_movies2:[],
    top250_movies1:[],
    top250_movies2:[],
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000,
    })

    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters?start=0&count=3",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
          title: data.title,
          movies: data.subjects,
          num: data.total
        })
      },
    }),
    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters?start=4&count=3",
        header: {
          "Content-Type": "json"
        },
        success: function (res1) {
          // wx.hideToast();
          var data1 = res1.data;
          that.setData({
            movies1: data1.subjects,
          })
        },
      }),
      wx.request({
      url: "https://api.douban.com/v2/movie/coming_soon?start=0&count=3",
        header: {
          "Content-Type": "json"
        },
        success: function (res1) {
          // wx.hideToast();
          var data1 = res1.data;
          that.setData({
            coming_movies1: data1.subjects,
          })
        },
      }),
      wx.request({
      url: "https://api.douban.com/v2/movie/coming_soon?start=4&count=3",
        header: {
          "Content-Type": "json"
        },
        success: function (res1) {
          // wx.hideToast();
          var data1 = res1.data;
          that.setData({
            coming_movies2: data1.subjects,
          })
        },
      }),

      wx.request({
        url: "https://api.douban.com/v2/movie/top250?start=0&count=3",
        header: {
          "Content-Type": "json"
        },
        success: function (res1) {
          // wx.hideToast();
          var data1 = res1.data;
          that.setData({
            top250_movies1: data1.subjects,
          })
        },
      }),

      wx.request({
        url: "https://api.douban.com/v2/movie/top250?start=4&count=3",
        header: {
          "Content-Type": "json"
        },
        success: function (res1) {
          // wx.hideToast();
          var data1 = res1.data;
          that.setData({
            top250_movies2: data1.subjects,
          })
        },
      })



  },


  top250: function () {
    wx.navigateTo({
      url: '../top250/top250'
    })
  },

  coming:function(){
    wx.navigateTo({
      url: '../coming-soon/coming',
    })
  },
  theaters:function(){
    wx.navigateTo({
      url: '../in_theaters/in_theaters',
    })
  }
});