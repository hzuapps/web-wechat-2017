var base64 = require("../images/base64");
Page({
    onLoad: function(){
        this.setData({
            icon20: base64.icon20,
            icon60: base64.icon60
        })
    },
    inputChange: function (e) {
      this.data.inputValue = e.detail.value;
    }
})