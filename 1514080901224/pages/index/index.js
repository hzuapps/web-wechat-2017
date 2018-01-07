//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    items: [],
    hidden: false,
    loading: false,
    loadmorehidden: true,
    plain: false
  },

  onItemClick: function (event) {
    var targetUrl = "/pages/images";
    if (event.currentTarget.dataset.url != null)
      targetUrl = targetUrl + "?url=" + event.currentTarget.dataset.url;
    wx.navigateTo({
      url: targetUrl
    });
  },

  loadMore: function (event) {
    var that = this
    requestData(that, mCurrentPage + 1);
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    requestData(that, mCurrentPage + 1);
  }
})

/**
 * 定义几个数组用来存取item中的数据
 */
var mUrl = [];
var mDesc = [];
var mWho = [];
var mTimes = [];
var mTitles = [];

var mCurrentPage = 0;


/**
 * 请求数据
 * @param that Page的对象，用来setData更新数据
 * @param targetPage 请求的目标页码
 */
function requestData(that, targetPage) {
  wx.request({
    url: 'http://image.baidu.com/data/imgs?col=美女&tag=小清新&sort=0&pn=10&rn=10&p=channel&from=1',

    success: function (res) {
      if (res == null ||
        res.data == null ||
        res.data.results == null ||
        res.data.results.length <= 0) {

       
        return;
      }

      var i = 0;
      for (; i < res.data.results.length; i++)
        bindData(res.data.results[i]);

      //将获得的各种数据写入itemList，用于setData
      var itemList = [];
      for (var i = 0; i < mUrl.length; i++)
        itemList.push({ url: mUrl[i], desc: mDesc[i], who: mWho[i], time: mTimes[i], title: mTitles[i] });

      that.setData({
        items: itemList,
        hidden: true,
        loadmorehidden: false,
      });

      mCurrentPage = targetPage;
    }
  });
}

/**
 * 绑定接口中返回的数据
 * @param itemData Gank.io返回的content;
 */
function bindData(itemData) {

  var url = itemData.url.replace("//ww", "//ws");
  var desc = itemData.desc;
  var who = itemData.who;
  var times = itemData.publishedAt.split("T")[0];

  mUrl.push(url);
  mDesc.push(desc);
  mWho.push(who);
  mTimes.push(times);
  mTitles.push(times);
}
