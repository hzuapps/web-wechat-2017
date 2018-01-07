Page({
  data: {
    showTopTips: false,
    TypeName:["Javascript","C++","Java"],
    date: "2016-09-01",
    typeindex:0,
    isAgree: false,
    hidden:true,
  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  
  bindTypeChange: function(e){
    this.setData({
      typeindex: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
 
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },

  formSubmit: function (e) {
    this.setData({
      hidden:false,
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var self = this;
    var formData = e.detail.value; //获取表单所有input的值
    wx.request({
      url: 'http://localhost/data/1514080901104/upload',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log("上传成功，以下是返回值");
        console.log(res.data);
        setTimeout(function(){
          self.setData({
            hidden: true,
          })
        },2000);
      }
    }) 
  },


  formReset: function () {
    console.log('form发生了reset事件')
  }
});