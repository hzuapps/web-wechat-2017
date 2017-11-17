Page({

  /**
   * 页面的初始数据
   */
  data: {
    times: ["2分钟", "3分钟", "5分钟"],
    timeIndex: 0,
    startNum: null,
    endNum: null,
    limitTime: null
  },

  bindTimeChange: function (e) {
    //console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      timeIndex: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if (e.detail.value.startNum > e.detail.value.endNum) {
      console.log("起始学号必须小于终止学号。");
    } else {
      this.setData({
        startNum: e.detail.value.startNum,
        endNum: e.detail.value.endNum,
        limitTime: e.detail.value.limitTime
      });
    }
  },

  formReset: function () {
    console.log('form发生了reset事件')
  }  
})