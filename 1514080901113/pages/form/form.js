// pages/page5/page5.js
Page({

  data: {
    cgvalue: "",
     usernamevalue: "",
    passwordvalue: "",
    cgvalue2: "",
    usernamevalue2: "",
    passwordvalue2: ""
  },

  mytap: function () {
    var that=this;
    this.setData({
      cgvalue2: that.data.cgvalue,
      usernamevalue2: that.data.usernamevalue,
      passwordvalue2: that.data.passwordvalue
    })

  },

  cg: function (e) {
    this.setData({
      cgvalue: e.detail.value
    })

  },


  usernameinput: function (e) {
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