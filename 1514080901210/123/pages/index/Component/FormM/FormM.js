// pages/index/Component/FormM/FormM.js
Page({
  //初始化数据
  data: {
    array: ['大中国', '美国', '巴西', '小日本'],
    index: 0,
    date: '2016-12-20',
    time: '11:19',
    allValue:''
  },
  //表单提交按钮
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      allValue:e.detail.value
    })
  },
  //表单重置按钮
  formReset: function(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue:''
    })
  },
  //---------------------与选择器相关的方法
  //地区选择
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //时间选择
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})