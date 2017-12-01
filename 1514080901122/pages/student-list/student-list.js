var tempNum = 0;
Page({
  data: {
    students: []
  },

  onLoad: function(options) {
    var that = this;
    wx.request({
      url: "http://www.easy-mock.com/mock/5a1f5ba9ca645757c0517e26/wechat-app-test/student-list",
      success: function (res) {
        var resData = res.data.data;
        that.setData({
          students: resData
        });
      }
    });
  },

  more: function (e) {
    //console.log(e);
    var that = this;
    wx.request({
      url: 'http://easy-mock.com/mock/5a20c161be1c8248fef10e93/wechat-app-test2/web-wechat-test2',
      success: function(res) {
      var resData = res.data.data;
      //console.log(resData);
        that.setData({
          students: that.data.students.concat(resData)
        });
        console.log(that.data.students)
      }
    })
    // tempNum++;
    // var newGuy = { 
    //   sNum: "11" + tempNum,
    //   name: "神秘人" 
    // };
    // if (tempNum <= 35) {
    //   //this.data.students.push(newGuy);
    //   this.setData({
    //     students: this.data.students,
    //   })
    // } else {
    //   console.log("全员到齐！");
    // }
  }

})