// pages/search/search.js
var API_URL ="https://api.douban.com/v2/movie/search";
Page({

  data: {
    movies:[]
  },

  search:function(e){
    if(!e.detail.value){
      return;
    }
    wx.showToast({
      title: '加载中...',
      icon:"loading",
      duration:1000
    });
    var that=this;
    wx.request({
      url: API_URL + "?q=" + e.detail.value,
      data:{},  
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        //console.log(res.data);
        wx.hideToast();
        that.setData({
          movies:res.data.subjects
        })
      }
    })
  },
  ri: function () {
    wx.navigateTo({
      url: '../day/ri'
    })
  },
  zhou: function () {
    wx.navigateTo({
      url: '../week/week'
    })
  },
  zhoumo: function () {
    wx.navigateTo({
      url: '../weekend/weekend',
    })
  },
  yue: function () {
    wx.navigateTo({
      url: '../month/month',
    })
  },
  xinlang: function () {
    wx.navigateTo({
      url: '../new/new',
    })
  },
  piaofang: function () {
    wx.navigateTo({
      url: '../piaofang/piaofang',
    })
  },
})