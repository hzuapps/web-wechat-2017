// pages/page5/page5.js
Page({

  data: {
    cgvalue: "",
    rgvalue: "",
    usernamevalue: "",
    passwordvalue: "",
    cgvalue2: "",
    rgvalue2: "",
    usernamevalue2: "",
    passwordvalue2: ""
  },

  mytap: function () {
    this.setData({
      cgvalue2: this.data.cgvalue,
      rgvalue2: this.data.rgvalue,
      usernamevalue2: this.data.usernamevalue,
      passwordvalue2: this.data.passwordvalue
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