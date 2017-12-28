var util = require('../../utils/util.js');  
Page({

  data: {
    time:'',
    result: ''
  },

  // 提交表单事件
  bindFormSubmit: function(e){
    console.log(e);
    var time = util.formatTime(new Date());
    this.setData({
      time: time,
      result: e.detail.value.moodtext
    });
  },

  onLoad: function (options) {
      
  }
})