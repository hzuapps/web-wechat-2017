
const util = require('../../utils/util.js')

Page({
  data: {
   account:"",
   passwd:""
  },
signbutton:function(){
  var that =this;
  if ((that.data.passwd == "") && (that.data.account == ""))
  {
    wx.showModal({
      title: '提示',
      content: '账号或密码不能为空！',
      showCancel: false
    })
  }else{
  wx.setStorageSync(
    'passwd', '' + that.data.passwd
  );
  wx.setStorageSync(
    'account', '' + that.data.account
  );
  wx.showModal({
    title: '提示',
    content: '注册成功！',
    showCancel: false
  })
  wx.redirectTo({
    url: "../index/index"
  })
  }
},
/*----------------------------------------------------------------------------*/
textinput2: function (e) {
  this.setData({
  passwd: e.detail.value
  })
},
textinput: function (e) {
  this.setData({
    account: e.detail.value
  })
}
})
