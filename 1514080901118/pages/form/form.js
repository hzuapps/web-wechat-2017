// pages/index/Component/FormM/FormM.js
Page({
  //初始化数据
  data: {
    array: ['话题1', '话题2', '话题3', '话题4'],
    index: 0,
    date: '2017-11-10',
    time: '00:00',
    allValue: ''
  },
  //表单提交按钮
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      hasError: false,
      allValue: e.detail.value
    })
  },
  //表单重置按钮
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: ''
    })
  },
  //---------------------与选择器相关的方法
  //地区选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //时间选择
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
 pick: function (e) {
    this.setData({
      cgvalue: e.detail.value
    })

  },
})