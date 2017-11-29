// pages/page5/page5.js
Page({
  data:{
  name:"",
   password:"",
   cg52:"",
   rg52:""
  },
  onLoad: function (options) {
    this.setData({
      name: options.username,
      pass: options.password,
      cg52: options.cg,
      rg52: options.rg
    })  
  }
})