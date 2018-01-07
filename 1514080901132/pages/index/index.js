//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '菜单',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      showView: true,
      students: [
        {
          sNum: "1",
          name: '鲜虾粥',
          price: '38'
        },
        {
          sNum: "2",
          name: '鱼片粥',
          price: '28'
        },
        {
          sNum: "3",
          name: '兴国米粉鱼',
          price: '12'
        },
        {
          sNum: "4",
          name: '深海龙利鱼',
          price: '16'
        },
        {
          sNum: "5",
          name: '垮多春鱼',
          price: '18'
        },
        {
          sNum: "6",
          name: '酸梅汤',
          price: '16'
        }
      ],
      foods: [],
      windowHeight: 0,//获取屏幕高度  
      refreshHeight: 0,//获取高度  
      refreshing: false,//是否在刷新中  
      refreshAnimation: {}, //加载更多旋转动画数据  
      clientY: 0,//触摸时Y轴坐标  
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
     var _this = this;
     _this.more();
    //获取屏幕高度  
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          windowHeight: res.windowHeight
        })
        console.log("屏幕高度: " + res.windowHeight)
      }
    })
    /*获取words  
    wx.request({
      url: 'http://api.avatardata.cn/ChengYu/Search?key=77f072d28eb141c8b6dda145ca364b92&keyWord=好',
      complete: function (res) {
        if (res.data.reason == 'Succes') {
          _this.setData({
            words: res.data.result
          })
        }
      }
    })  */
  },
  more: function () {
    var start = 0;
    start += 1;
    console.log("加载了...")
    var _this = this;
    wx.request({
      url: 'https://infoaas.com/data/1514080901132',
      success: function (res) {
       console.log(res.data)
           _this.foods = res.data;
          console.log(_this.foods[1].name)
          _this.setData({
           // foods: words
          })
         // console.log(foods)
       
      }
    })
  },
  start: function (e) {
    var startPoint = e.touches[0]
    var clientY = startPoint.clientY;
    this.setData({
      clientY: clientY,
      refreshHeight: 0
    })
  },
  end: function (e) {
    var endPoint = e.changedTouches[0]
    var y = (endPoint.clientY - this.data.clientY) * 0.6;
    if (y > 50) {
      y = 50;
    }
    this.setData({
      refreshHeight: y
    })
  },  
   onChangeShowState: function () {
    var that = this;
    that.more();
    that.setData({
      showView: (!that.data.showView)
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
