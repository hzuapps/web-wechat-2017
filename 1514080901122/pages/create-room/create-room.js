Page({

  /**
   * 页面的初始数据
   */
  data: {
    times: ["2分钟", "3分钟", "5分钟"],
    timeIndex: 0,
    startNum: 0,
    endNum: 0,
    limitTime: 0,
    warning: ""
  },

  bindTimeChange: function (e) {
    //console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      timeIndex: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    if (e.detail.value.startNum == "" || e.detail.value.endNum == "") {
      console.log("请填写完整的学号范围。");
      this.setData({
        warning: "请填写完整的学号范围。"
      });
    } else if (parseInt(e.detail.value.startNum) > parseInt(e.detail.value.endNum)) {
      console.log("起始学号必须小于终止学号。");
      this.setData({
        warning: "起始学号必须小于终止学号。"
      });
    } else {
      // 创建成功提示
      wx.showLoading({
        title: '创建成功',
        icon: '创建成功',
        duration: 2000
      });
      this.setData({
        warning: "",
        startNum: e.detail.value.startNum,
        endNum: e.detail.value.endNum,
        limitTime: this.data.times[e.detail.value.limitTime]
      });
      //跳转到now-room页面
      wx.navigateTo({
        url: '../now-room/now-room' + '?startNum=' + e.detail.value.startNum + '&endNum=' + e.detail.value.endNum + '&limitTime=' + this.data.times[e.detail.value.limitTime]
      });      
    }
  },

  formReset: function () {
    console.log('form发生了reset事件');
    this.setData({
      warning: "",
      timeIndex: 0
    })    
  },  
})