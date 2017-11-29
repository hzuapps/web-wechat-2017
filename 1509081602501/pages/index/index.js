//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    scrollTop: 100,
    array: [{
      msg:'你好',
      time:'yesterday',
      text:'Anna',
      icon:'../../image/1.jpg'
    },{
        msg: '在吗',
        time: 'today',
      text: 'Bill',
      icon: '../../image/2.jpg'
    }, {
        msg: '请问你',
        time: 'Sun',
      text: 'Klia',
      icon: '../../image/3.jpg'
    }, {
        msg: '你好',
        time: '11/17/12',
        text: 'Home',
      icon: '../../image/4.jpg'
    }, {
        msg: '吃饭了吗',
        time: 'yesterday',
        text: 'Koli',
      icon: '../../image/5.jpg'
    },
    {
      msg: '好久不见',
      time: '8:45AM',
      text: 'Jkil',
      icon: '../../image/6.jpg'
    },
    {
      msg: '你好',
      time: 'yesterday',
      text: 'Fiki',
      icon: '../../image/1.jpg'
    },
    {
      msg:' 哈哈哈',
      time: '9:00PM',
      text: 'Sili',
      icon: '../../image/2.jpg'
    },
    {
      msg: '见到你真高兴',
      time: 'yesterday',
      text: 'Dava',
      icon: '../../image/3.jpg'
    },
    
    ],
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  onLoad: function () {

  },
    onShow: function () {

  },

    onHide: function(){

    },
    onUnload:function(){

    },

    onReachBottom:function(){

    },

    loadMore:function () {
      var that=this;
      wx.showLoading({
        title:"正在加载..."
      })
      that.setData({
        array: that.data.array.concat
          ([{
            msg: '你好',
            time: 'yesterday',
            text: 'Anna',
            icon: '../../image/1.jpg'
          }, {
            msg: '在吗',
            time: 'today',
            text: 'Bill',
            icon: '../../image/2.jpg'
          }, {
            msg: '请问你',
            time: 'Sun',
            text: 'Klia',
            icon: '../../image/3.jpg'
          }, {
            msg: '你好',
            time: '11/17/12',
            text: 'Home',
            icon: '../../image/4.jpg'
          }, {
            msg: '吃饭了吗',
            time: 'yesterday',
            text: 'Koli',
            icon: '../../image/5.jpg'
          },
          {
            msg: '好久不见',
            time: '8:45AM',
            text: 'Jkil',
            icon: '../../image/6.jpg'
          },
          {
            msg: '你好',
            time: 'yesterday',
            text: 'Fiki',
            icon: '../../image/1.jpg'
          },
          {
            msg:'哈哈哈',
            time: '9:00PM',
            text: 'Sili',
            icon: '../../image/2.jpg'
          },
          {
            msg: '见到你真高兴',
            time: 'yesterday',
            text: 'Dava',
            icon: '../../image/3.jpg'
          },
        ])
    })
    setTimeout(function(){
      wx.hideLoading()
    },1000)

    }
})