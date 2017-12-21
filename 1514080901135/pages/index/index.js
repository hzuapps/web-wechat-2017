
const app = getApp()

Page({
  data: {
     account:"",
     passwd:"",
     account2: "",
     passwd2: ""
  },
passwdinput:function(e){
this.setData({
  account2:e.detail.value
})
},
accountinput: function (e) {
  this.setData({
   passwd2: e.detail.value
  })
},
  confirmbutton:function(){
    var var1 = wx.getStorageSync('passwd') || this.data.passwd;
    var var2 = wx.getStorageSync('account') || this.data.account;
   if((var2==this.data.account2)&&(var1==this.data.passwd2))
   {
     wx.redirectTo({
       url: "../items/items" + "?account=" + var2 + "&passwd=" + var1
     })
   }else
   {
     wx.showModal({
       title: '提示',
       content: '账号或密码输入错误！！',
       showCancel:false
     })
   }
  },
signbutton:function(){
wx.redirectTo({
  url: '../sign/sign',
})

}
  
})
