var tempNum = 0;
Page({
  data: {
   days: [
      /*{
        w: "星期一",
        s:"等我会让你看到满天繁星"
      
      },
      {
        w: "星期二",
        s: "等我会让你看到满天繁星"
      },
      {
        w: "星期三",
        s: "等我会让你看到满天繁星"
      },
      {
        w: "星期四",
        s: "等我会让你看到满天繁星"
      },
      {
        w: "星期五",
        s: "等我会让你看到满天繁星"
      },
      {
        w: "星期六",
        s: "等我会让你看到满天繁星"
      },
      {
        w: "星期日",
        s: "等我会让你看到满天繁星"
      } */   ]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901128/ComicNew.json',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data.list)
        that.setData({
          hasError: true,
          ranks: res.data.list
        })
      }
    })
  },
 })