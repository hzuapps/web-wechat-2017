
var config = require('../../config.js');   //导入配置文件

Page({
  data: {
    showTopTips: false,
    TypeName: ["Javascript", "C++", "Java","python","机器学习","算法","数学","Linux","C语言","SQL","网络"],
    date: "2016-09-01",
    typeindex: 0,
    isAgree: false,
    hidden: true,
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

  bindTypeChange: function (e) {
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
      hidden: false,
    })
  
    var self = this;
    var formData = e.detail.value; //获取表单所有input的值
    wx.request({
      url: config.config.shareurl,                    //这里不清楚怎么将表单数据上传到服务器，是否还需要后台处理才能保存到数据库中
      data: {
        Author:formData.Author,
        BookTypeID: formData.BookTypeID,
        Bookname: formData.Bookname,
        DownloadPassword: formData.DownloadPassword,
        DownloadUrl: formData.DownloadUrl,
        ISBN: formData.ISBN,
        Interpreter: formData.Interpreter,
        Introduction: formData.Introduction,
        Publishing_Date: formData.Publishing_Date,
        Publishing_House: formData.Publishing_House,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 1000
        });
      },
      fail:function(res){
        wx.showToast({
          title: '上传失败',
          icon: 'loading',
          duration: 1000
        });
      }
    })
  },
  getbookinfo:function(res){
    wx.showToast({
      title: '此功能暂未实现',
      icon: 'success',
      duration: 1000
    });
  },

  formReset: function () {
  }
});