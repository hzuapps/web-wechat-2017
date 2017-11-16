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
    scv_hidden:true
    

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
                             scrollHeight:res.windowHeight-300
                        });
    
            }
        });
         
    },
  onReachBottom: function () {
    
      
       {
         this.setData({
           hidden: false,
         });
      console.log('加载更多')
       var newInfo = [
         { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C1区" },
       { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C2区" },
       { time: '2017 - 01 - 03', info: "快件xxx到达xxx市C3区" }, 
       { time: '2017 - 01 - 04', info: "快件xxx到达xxx市C1区" },
       { time: '2017 - 01 - 05', info: "快件xxx到达xxx市C2区" },
       { time: '2017 - 01 - 06', info: "快件xxx到达xxx市C3区" },
       { time: '2017 - 01 - 03', info: "快件xxx派送中，派送员：xxx" },
       { time: '2017 - 01 - 03', info: "已收件，收件人：XXX" }];
   this.data.Info = this.data.Info.concat(newInfo);

          this.setData({
          
              'Info':this.data.Info,
    
            });
          this.setData({
            hidden: true,
          })

   }
  },

  bindkdValueChange: function (e) {

    this.setData({
      kdValueIndex: e.detail.value
    })
  },
  showInfo: function(){
    /*wx.navigateTo({
      url: '../kdInfo/kdInfo',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })*/
    this.setData({
      scv_hidden:false
    })
  }
})
