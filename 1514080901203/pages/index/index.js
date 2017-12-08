//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    kdValues: ['百世汇通', '德邦物流', 'EMS快递', '京东快递', '申通快递', '顺丰速运', '天天快递', '圆通速递', '韵达快运', '中国邮政快递', '中通快递','宅急送'],
    kdValueIndex:3,
    Info: [], 
    scrollTop: 0,
    scrollHeight:0,
    hidden: true,
    scv_hidden:true,
    err_hidden:true,
    errMessage:'',
    errReason:'',
    text: '',
    //nu:'887470643087868982',
    nu:'',
    com:'jd'

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
            success:function (res)  {
              that.setData(
                {scrollHeight:res.windowHeight-263}
                          );
                                    }
                        });
         
  },
  

  bindkdValueChange: function (e) {
    var that = this;
    console.log(e);

    this.setData({
      kdValueIndex: e.detail.value
    })
    console.log(that.data.kdValueIndex)
    switch(that.data.kdValueIndex){
      case '0': that.setData({ com: 'huitongkuaidi' });break;
      case '1': that.setData({ com: 'debangwuliu' }); break;
      case '2': that.setData({ com: 'ems' }); break;
      case '3': that.setData({ com: 'jd' }); break;
      case '4': that.setData({ com: 'shentong' }); break;
      case '5': that.setData({ com: 'shunfeng' }); break;
      case '6': that.setData({ com: 'tiantian' }); break;
      case '7': that.setData({ com: 'yuantong' }); break;
      case '8': that.setData({ com: 'yunda' }); break;
      case '9': that.setData({ com: 'youzhengguonei' }); break;
      case '10': that.setData({ com: 'zhongtong' }); break;
      case '11': that.setData({ com: 'zhaijisong' }); break;
    }
    console.log(that.data.com);
  },
  
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
    this.setData({Info:''})
    app.getExpressInfo(that.data.nu,that.data.com,function(kddata){
      console.log(kddata)
      if(kddata.status == 0) {
        that.setData({err_hidden:false}),
        that.setData({errMessage: kddata.errMsg}),
        that.setData({errReason: kddata.reason})
      }
      else {
      that.setData({ err_hidden: true }),
      that.setData({Info:kddata.data})
      }
    })
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
  nuinput : function(event) {
    console.log(event);
    this.setData({
      nu:event.detail.value
    })
    console.log(event.detail.value);
    console.log(this.data.nu);

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
