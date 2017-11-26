// pages/page5/page5.js
Page({

  data: {
    cgvalue: "",
    rgvalue: "",
    usernamevalue: "",
    addressvalue: "",
    cgvalue2: "",
    rgvalue2: "",
    usernamevalue2: "",
    addressvalue2: ""
  },

  mytap: function () {
    this.setData({
      cgvalue2: this.data.cgvalue,
      rgvalue2: this.data.rgvalue,
      usernamevalue2: this.data.usernamevalue,
      addressvalue2: this.data.addressvalue
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

 addressinput: function (e) {
   this.setData({
     addressvalue: e.detail.value 
   }) 
 }

})