// pages/demo/scrollView.js

var lastFrame = 0;
var isFirstTime = true;
var flag = true;
var isMove = true;

Page({


  data: {
    color: ['red', 'blue', 'green', 'Crimson', 'DarkOrange'],
    top:0,
    length:1,
    isCar:true,
    offset:0,
  },

  onLoad: function (options) {

    var that = this
    this.interval  =  setInterval(this.move, 10)  
   
    // 设置窗口大小
    wx.getSystemInfo({

      success: (res) => {

        that.setData({

          windowHeight: res.windowHeight - 5,

          windowWidth: res.windowWidth

        })

      }

    })
  },



  onEnd: function (e) {
    var that = this;
    var l  = that.data.length + 1;
    if(l <= 2) {
      that.setData({
        length:l,
      })
    }
    else{
       flag = false;
    }
  },

  move:function(){
    var that = this;
    var m = that.data.top + 1;
    var ofS = that.data.offset + 1;
    var l = that.data.length + 1;
    if(flag && isMove){
      that.setData({
        top:m,
        offset:ofS
      });
    }
    else if(isMove){
      if(isFirstTime){
        lastFrame = that.data.offset;
        isFirstTime = false;
      }
      that.setData({
        offset:ofS,
      })
      if(ofS - lastFrame >= 400){
         that.setData({
            isCar:false
         });
         isMove = false;
      }
    }
    else{

    }
  }

})