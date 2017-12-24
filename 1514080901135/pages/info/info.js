
const util = require('../../utils/util.js')

Page({ 
  data: {flag2:0,
              flag:0,
           button1_1: false,
            button2_2:false,
            button3_3: false,
            button4_4: false,
           text_1:'',
            text_2:'',
            var1:"",
            var2:'',
            pickers:true,
            year:0,
            month:0,
            day:0,
            input1:true,
            input_1:"",
            button1:"编辑",
            button2: "编辑",
            button3: "编辑",
            button4:"日期编辑",
            text1: true,
            text2: true,
            name:"",
            plan:"",
            tadyplan:"",
            deadline:"",
            ifshow:false,
            Startdate:"0000-00-00",
            Enddate:"0000-00-00",
            date: '2010-12-03',
  },
  onLoad:function(){
    var that=this;
    this.setData({
     date: util.formatTime(new Date()),
     input_1:wx.getStorageSync('name'),
     text_1: wx.getStorageSync('tadyplan'),
     text_2:wx.getStorageSync('plan'),
     Startdate: wx.getStorageSync('Startdate'),
     Enddate: wx.getStorageSync('Enddate')
    });

    if((this.data.date>this.data.Enddate)&&this.data.flag)
    {
         that.setData({
                   ifshow:true,
                   button1_1: true,
                   button2_2: true,
                   button3_3: true,
                   button4_4: true,
         })
    }
  },
 picker_1:function(e){
  this.setData({
    Startdate:e.detail.value,
  });
  wx.setStorageSync('Startdate', e.detail.value);
 },
 picker_2: function (e) {
   this.setData({
     Enddate: e.detail.value,
   });
   wx.setStorageSync('Enddate', e.detail.value)
 },
  input_1:function(e){
 wx.setStorageSync("name", e.detail.value);
  },
 text_1: function (e) {
   wx.setStorageSync("tadyplan", e.detail.value);
  },
  text_2: function (e) {
    wx.setStorageSync("plan", e.detail.value);
  },
  button_1:function()
  {
    var that=this;
    if (that.data.input1)
    {
      that.setData({
        input1: !that.data.input1,
        button1: "确定",
        input_1:wx.getStorage({
          key: 'name',
          success: function(res) {},
        }),
      })
    }
    else
    {
      that.setData({
        input1: !that.data.input1,
        button1: "编辑",
      })
    }
  },
  button_2: function () {
    var that = this;
    if (that.data.text1) {
      that.setData({
        text1: !that.data.text1,
        button2: "确定",
        text_1: wx.getStorage({
          key: 'name',
          success: function (res) { },
        }),
      })
    }
    else {
      that.setData({
        button2: "编辑",
        text1: !that.data.text1,
      })
    }
  },
  button_3: function () {
    var that = this;
    if (that.data.text2) {
      that.setData({
        text2: !that.data.text2,
        button3: "确定",
        text_2: wx.getStorage({
          key: 'name',
          success: function (res) { },
        }),
      })
    }
    else {
      that.setData({
        button3: "编辑",
        text2: !that.data.text2,
      })
    }
  },
  button_4: function () {
    var that = this;
    if (that.data.pickers) {
      that.setData({
        pickers: !that.data.pickers,
        button4: "确定",
      })
    }
    else {
      that.setData({
        pickers: !that.data.pickers,
        button4: "日期编辑",
      });
      var var1 = that.data.Startdate;
      var var2 = that.data.Enddate;
      if ((var1 > var2) || (wx.getStorageSync('name') == ""))
       { 
         wx.showModal({
           title: '异常！！！',
           content: '缺少必要设置或设置出错',
           showCancel:false,
           success: function (res) {
             if (res.confirm) {
            that.setData({
              Startdate: "0000-00-00",
              Enddate: "0000-00-00",
              flag2:1,
            });
  
                              }                            
                                  } 
         })
       }else{
      if ((this.data.date > this.data.Enddate)&&(wx.getStorageSync('name'))!='') {
        that.setData({
          ifshow: true,
          button1_1: true,
          button2_2: true,
          button3_3: true,
          button4_4: true,
        })
      }
      }
    }

  },
  deletebutton:function(){
         var that=this;
         that.setData({
           date: util.formatTime(new Date()),
           input_1:"",
           text_1: "",
           text_2: "",
           Startdate: "0000-00-00",
           Enddate: "0000-00-00",
           ifshow: false,
           button1_1: false,
           button2_2: false,
           button3_3: false,
           button4_4: false,
         });
        wx.setStorageSync('name','');
          wx.setStorageSync('tadyplan', '');
          wx.setStorageSync('plan', '');
          wx.setStorageSync('Startdate', '0000-00-00');
          wx.setStorageSync('Enddate', '0000-00-00');
  },
  redirectbutton:function(){
if(this.data.flag2==1)
{
  var that = this;
  that.setData({
    date: util.formatTime(new Date()),
    input_1: "",
    text_1: "",
    text_2: "",
    Startdate: "0000-00-00",
    Enddate: "0000-00-00",
    ifshow: false,
    button1_1: false,
    button2_2: false,
    button3_3: false,
    button4_4: false,
  });
  wx.setStorageSync('name', '');
  wx.setStorageSync('tadyplan', '');
  wx.setStorageSync('plan', '');
  wx.setStorageSync('Startdate', '0000-00-00');
  wx.setStorageSync('Enddate', '0000-00-00');
}
    wx.redirectTo({
      url: '../items/items',
    })
  }
})
