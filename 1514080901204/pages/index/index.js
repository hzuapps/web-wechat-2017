//index.js
//获取应用实例
const app = getApp()
var numAi = 0
var timer



Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),


    btnState:false,
    winNum:0,
    gameOfPlay:'',
    imageUserScr:'/images/timg.jpg',
     imageAiScr:'',
     srcs: [
       '/images/石头.png',
       '/images/剪刀.png',
       '/images/布.png'
     ]
  },
  //事件处理函数

jmpscroll : function() {
    wx.navigateTo({
      url: '../scroll/scroll'
    })
  },
jmpform: function () {
  wx.navigateTo({
    url: '../form/form'
  })
},
jmpnet: function () {
  wx.navigateTo({
    url: '../net/net'
  })
},

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jmpknow: function () {
    wx.navigateTo({
      url: '../know/know'
    })
  },





  onLoad: function () {

    //获取本地缓存“已经获胜的次数”
    var oldWinNum = wx.getStorageSync('winNum');
    //如果有缓存，那么赋值，否则为0
    if (oldWinNum != null && oldWinNum != '') {
      this.data.winNum = oldWinNum;
    }
    this.timerGo();


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } 


    
    else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } 


    
    else {
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

  //点击按钮
  changeForChoose(e) {
    console.log();
    if (this.data.btnState == true) {
      return;
    }


    //获取数组中用户的，石头剪刀布相应的图片。
    this.setData({
      imageUserScr: this.data.srcs[e.currentTarget.id]
    });

    //清除计时器
    clearInterval(timer);

    //获取数据源
    var user = this.data.imageUserScr;
    var ai = this.data.imageAiScr;
    var num = this.data.winNum;
    var str = '可惜！你输了一局~';



    //判断是否获胜
    if (user == "/images/石头.png" && ai == "/images/剪刀.png") {
      //获胜后增加次数、改变文字内容、从新缓存获胜次数
      num++;
      str = '恭喜！你赢一局!';
      wx.setStorageSync('winNum', num);
    };
    if (user == "/images/剪刀.png" && ai == "/images/布.png") {
      num++;
      str = '恭喜！你赢一局!';
      wx.setStorageSync('winNum', num);
    };
    if (user == "/images/布.png" && ai == "/images/石头.png") {
      num++;
      str = '恭喜！你赢一局!';
      wx.setStorageSync('winNum', num);
    };

    //如果平局
    if (user == ai) {
      str = '打平!';
    }

    //刷新数据
    this.setData({
      winNum: num,
      gameOfPlay: str,
      btnState: true
    });
  },

    //开启计时器
    timerGo(){  
      timer = setInterval(this.move, 100);
    },



  //ai滚动方法
  move() {
    //如果大于等于3，重置
    if (numAi >= 3) {
      numAi = 0;
    }
    this.setData({
      //获取数组中Ai的，石头剪刀布相应的图片。
      imageAiScr: this.data.srcs[numAi],
    })
    numAi++;
  },


  again() {
    //控制按钮
    if (this.data.btnState == false) {
      return;
    }
    //从新开始计时器
    this.timerGo();
    //刷新数据
    this.setData({
      btnState: false,
      gameOfPlay: '',
      imageUserScr: '/images/timg.jpg'
    });
  },






  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }



})


