// pages/page5/page5.js
Page({

  data: {
    cgvalue: "",
    rgvalue: "",
    usernamevalue: "",
    passwordvalue: ""
  },

  mytap: function () {
    var that=this;
    wx.showModal({
      title: '提示',
      content: "是否显示表单内容",
      success: function (res) {
        if (res.confirm) {
        wx.redirectTo({
          url: '../page5.2/page5.2?username=' + that.data.usernamevalue + "&password=" + that.data.passwordvalue + "&cg=" + that.data.cgvalue + "&rg=" + that.data.rgvalue 
        })
        } else if (res.cancel) {
    
        }
      }
    })
  }  ,

 cg:function(e){
   this.setData({
     cgvalue: e.detail.value 
   }) 

 },

 rg: function (e) {
   this.setData({
     rgvalue: e.detail.value 
   }) 
 },

 usernameinput:function(e){
   this.setData({
     usernamevalue: e.detail.value 
   })
 },

 passwordinput: function (e) {
   this.setData({
     passwordvalue: e.detail.value 
   }) 
 }

})