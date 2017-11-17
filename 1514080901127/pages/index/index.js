//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: {},
    session: []  
  },

  //实现动画效果
  onShow: function () {
    var animation = wx.createAnimation({
      duration:3000,
      timingFunction: 'ease-in-out',
    })
    this.animation = animation
    animation.rotate(360).step()    
   setTimeout(function () {
     animation.rotate(360).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 10)
  },

//实现页面滚动效果
onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
         windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
       // console.dir(that.data.windowHeight)
      }
    })
  that.setData({
   
    sessions: [{
      date: "10月1日",
      id:1,
      detail: [{
        id: 10,
        condition: "+",
        name: "生活费",
        income: "1000元"
      },{
        id:11,
        condition: "-",
        name: "早餐",
        outcome: "10元"
      }, {
        id: 12,
        condition: "-",
        name: "午餐",
        outcome: "10元"
        }, {
          id: 13,
          condition: "-",
          name: "晚餐",
          outcome: "10元"
        }]   
      }, {
      date: "10月2日",
      id: 2,
      detail: [{
        id: 21,
        condition: "-",
        name: "早餐",
        outcome: "10元"
      }, {
        id: 22,
        condition: "-",
        name: "午餐",
        outcome: "10元"
        }, {
          id: 23,
          condition: "-",
          name: "晚餐",
          outcome: "10元"
        }]
      }, {
        date: "10月3日",
        id: 3,
        detail: [{
          id: 31,
          condition: "-",
          name: "早餐",
          outcome: "10元"
        }, {
          id: 32,
          condition: "-",
          name: "午餐",
          outcome: "10元"
        }, {
          id: 33,
          condition: "-",
          name: "晚餐",
          outcome: "10元"
        }]
      }, {
        date: "10月4日",
        id: 4,
        detail: [{
          id: 41,
          condition: "-",
          name: "早餐",
          outcome: "10元"
        }, {
          id: 42,
          condition: "-",
          name: "午餐",
          outcome: "10元"
        }, {
          id: 43,
          condition: "-",
          name: "晚餐",
          outcome: "10元"
        }]
      }, {
        date: "10月5日",
        id: 5,
        detail: [{
          id: 51,
          condition: "-",
          name: "早餐",
          outcome: "10元"
        }, {
          id: 52,
          condition: "-",
          name: "午餐",
          outcome: "10元"
        }, {
          id: 53,
          condition: "-",
          name: "晚餐",
          outcome: "10元"
        }]
      }, {
        date: "10月6日",
        id: 6,
        detail: [{
          id: 61,
          condition: "-",
          name: "早餐",
          outcome: "10元"
        }, {
          id: 62,
          condition: "-",
          name: "午餐",
          outcome: "10元"
        }, {
          id: 63,
          condition: "-",
          name: "晚餐",
          outcome: "10元"
        }]
      }]
   
  })
},
  onEnd: function (e) {
    console.dir(e)
    var that = this;
    that.setData({
      //isLower: true,
      sessions: that.data.sessions.concat([{
        date: "10月10日",
        id:10,
        detail:[{
          id:101,
          condition:"-",
          name: "午餐",
          outcome: "10元"
        }]
      }])
    })
  },

  onScroll: function () {
    console.dir("onScroll");
  }

})