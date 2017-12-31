
var currentPage = 1;//当前页,默认 第一页
var config = require('../../utils/config');
var utils = require('../../utils/util.js');

Page({
  data: {
    list: [],
  },
  onLoad: function (options) {
    var that = this;
    that.fetchData();
  },
  onPullDownRefresh: function () { //下拉刷新
    currentPage = 1;
    this.setData({
      list: [],
    });
    this.fetchData();
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom: function () { // 上拉加载更多
    // Do something when page reach bottom.
    this.fetchData();
  },
  fetchData: function () {//获取列表信息
    var that = this;
    utils.showLoading();
    var option = {
      url: config.clubApi.list,
      data: {
        appkey: config.appKey,
        type: 'num',
        "currentPage": currentPage,
        "pageSize": config.page_size
      }
    };

    //发送数据请求
    utils.request(option,
      function (res) {
        if (res.data.page.dataTotal == 0) { return; }
        that.setData({ list: that.data.list.concat(res.data.result) });
        currentPage++;
        utils.hideLoading();
      })
  }
})

