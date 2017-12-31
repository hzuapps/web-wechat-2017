// pages/movies/movies.js
var API_URL ="https://api.douban.com/v2/movie/subject/"

Page({
  data:{
    movie:{}

  },
  onLoad:function(params){
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 0,
    })
    //console.log(params);
    wx.request({
      url: API_URL+params.id,
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        var data = res.data;
        console.log(data);
        that.setData({
          movie:res.data,
        });
      }
    })

  }
})