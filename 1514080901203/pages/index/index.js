//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    kdValues: ['顺丰速运','邮政ems','天天快递','圆通快递','申通快递','中通快递','京东快递','其他'],
    kdValueIndex:3,
    Info: [{ time: '2017 - 01 - 01', info: "快件xxx到达xxx市A区" },
      { time: '2017 - 01 - 02', info: "快件xxx到达xxx市B区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C1区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C2区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C3区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市D区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C3区" },
      { time: '2017 - 01 - 03', info: "快件xxx到达xxx市D区" }
    ], 
    scrollTop: 0,
    scrollHeight:0,
    hidden: true,
    scv_hidden:true,


    text: ''

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    
          
                var that = this;
              wx.getSystemInfo({
               success:function (res) {
                             that.setData({
                             scrollHeight:res.windowHeight-263
                        });
    
            }
        });
         
    },
  onReachBottom: function () {
    
      
       {
         var that = this;
         this.setData({
           hidden: false,
         });
         setTimeout(function () { console.log(that.hidden)
           
           var newInfo = [
             { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C1区" },
             { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C2区" },
             { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C3区" },
             { time: '2017 - 01 - 04', info: "快件xxx到达xxx市C1区" },
             { time: '2017 - 01 - 05', info: "快件xxx到达xxx市C2区" },
             { time: '2017 - 01 - 06', info: "快件xxx到达xxx市C3区" },
             { time: '2017 - 01 - 03', info: "快件xxx派送中，派送员：xxx" },
             { time: '2017 - 01 - 03', info: "已收件，收件人：XXX" }];
           that.data.Info = that.data.Info.concat(newInfo);
           
           that.setData({ hidden: true, });

           that.setData({

             'Info': that.data.Info,

           })
         }, 800);
          
     

   }
  },

  bindkdValueChange: function (e) {

    this.setData({
      kdValueIndex: e.detail.value
    })
  },
  /*showInfo: function(){
    /*wx.navigateTo({
      url: '../kdInfo/kdInfo',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    this.setData({
      scv_hidden:false
    })
},*/

  onSubmit: function (event) {
    console.dir(event)
    var that = this
    var text = event.detail.value.text
    if (!text) {
      console.dir(text)
      that.setData({
        hasError: true,
        errorText: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError: false
      })
      wx.setStorage({
        key: "input",
        data: event.detail.value,
        success: function (res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          }), that.setData({
            scv_hidden: false
          })

        }
      })
    }
  },

  onTextChange: function (e) {
    var that = this;
    console.dir(e)
    var text = e.detail.value
    console.dir(text);
    if (!text) {
      that.setData({
        hasError: true,
        errorText: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError: false
      })
    }
  },

  onChange: function (e) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)
    that.setData({
      count: value.length
    })
  }

})
