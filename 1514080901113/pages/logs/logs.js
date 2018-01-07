//logs.js
const util = require('../../utils/util.js')
//获取app里的数据:
const app = getApp()
Page({
  data: {
    logs: [],
//add两组变量
    typevalue: "",
    remarksvalue: "",
    amountvalue: "",
    typevalue2: "",
    remarksvalue2: "",
    amountvalue2: "",
    arr:[],
    count:0,
  },

  onLoad: function () {
    this.setData({

      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })     
  },

  //点击保存
  listenFormSubmit: function (e) {
    var self=this;
    console.log('listenFormSubmit=', e.detail.value);
    var arr=self.data.arr;
    var count=self.data.count;
    arr[count]=e.detail.value;
    wx.setStorageSync('dataarr', arr);
    count=count+1;
    self.setData({
      count:count,
    })

    wx.setStorageSync('yonghu', e.detail.value);
    console.log("在原页面打印数据");
    var testshuju = wx.getStorageSync('yonghu');
    console.log(testshuju);

  },
  //点击重置
  listenFormReser: function (e) {
    console.log('listenFormReser=', e.detail.value)
  },
  //当选中某一个的时候回调该函数。e.detail.value：获取选中某个radio的value
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
//将输入的参数传递
 mytap: function () {
    var that = this;
    this.setData({
      typevalue2: that.data.typevalue,
      remarksvalue2: that.data.remarksvalue,
      amountvalue2: that.data.amountvalue
    })
  },
//账目类型选项
  radio: function (e) {
    this.setData({
      typevalue: e.detail.value
    })
  },
  remarksinput: function (e) {
    this.setData({
      remarksvalue: e.detail.value
    })
  },
  amountinput: function (e) {
    this.setData({
      amountvalue: e.detail.value
    })
  },
})

