//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var order = ['red', 'yellow', 'blue', 'green', 'red','white']
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        link:'/pages/news/news',
        url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text:'巴黎铁塔是什么？'
      },
      {  
         link: '/pages/news/news2',
         url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
         text: '如何学好计算机'
      }, 
     {
         link: '/pages/news/news3',
         url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
         text: '兄弟篮球1+1'
     }   
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1500,
    userInfo: {},
    toView: 'red',
    scrollTop: 0,
    scrollLeft: 0,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    index: 0,
    multiArray: [['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号' ]],
    objectMultiArray: [
       [
        {
          id: 0,
          name: '1月'
        },
        {
          id: 1,
          name: '2月'
        },
        {
          id: 2,
          name: '3月'
        },
        {
          id: 3,
          name:'4月'
        },
        {
          id: 4,
          name: '5月'
        },
        {
          id: 5,
          name: '6月'
        },
        {
          id: 6,
          name: '7月'
        },
        {
          id: 7,
          name: '8月'
        },
        {
          id: 8,
          name: '9月'
        },
        {
          id: 9,
          name: '10月'
        },
        {
          id: 10,
          name: '11月'
        },
        {
          id: 11,
          name: '12月'
        }
      ], [
        {
          id: 0,
          name:'1号'
        },
        {
          id: 1,
          name: '2号'
        },
        {
          id: 2,
          name: '3号'
        },
        {
          id: 3,
          name: '4号'
        },
        {
          id: 4,
          name: '5号'
        },
        {
          id: 5,
          name: '6号'
        },
        {
          id: 6,
          name: '7号'
        },
        {
          id: 8,
          name: '9号'
        },
        {
          id: 9,
          name: '10号'
        },
        {
          id: 10,
          name: '11号'
        },
        {
          id: 11,
          name: '12号'
        },
        {
          id: 12,
          name: '13号'
        },
        {
          id: 13,
          name: '14号'
        },
        {
          id: 14,
          name: '15号'
        },
        {
          id: 15,
          name: '16号'
        },
        {
          id: 16,
          name: '17号'
        },
        {
          id: 17,
          name: '18号'
        },
        {
          id: 18,
          name: '19号'
        },
        {
          id: 19,
          name: '20号'
        },
        {
          id: 20,
          name: '21号'
        },
        {
          id: 21,
          name: '22号'
        },
        {
          id: 22,
          name: '23号'
        },
        {
          id: 23,
          name: '24号'
        },
        {
          id: 24,
          name: '25号'
        },
        {
          id: 25,
          name: '26号'
        },
        {
          id: 26,
          name: '27号'
        },
        {
          id: 27,
          name: '28号'
        },
        {
          id: 28,
          name: '29号'
        },
        {
          id: 29,
          name: '30号'
        },
        {
          id: 30,
          name: '31号'
        }
      ]
    ],

    multiIndex: [0,0],
    customItem: '全部',
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号'];
            break;
          case 1:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号'];
            break;
          case 2:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']
            break;
          case 3:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号']
            break;
          case 4:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']
            break;
          case 5:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号']
            break;
          case 6:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']
            break;
          case 7:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']
            break;
          case 8:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号']
            break;
          case 9:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']
            break;
          case 10:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号']
            break;
          case 11:
            data.multiArray[1] = ['1号', '2号', '3号', '4号', '5号', '6号', '7号', '8号', '9号', '10号', '11号', '12号', '13号', '14号', '15号', '16号', '17号', '18号', '19号', '20号', '21号', '22号', '23号', '24号', '25号', '26号', '27号', '28号', '29号', '30号', '31号']
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },

  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  jump:function(){
    wx.navigateTo({
      url: '/pages/page/look',
    })
  },
  
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
