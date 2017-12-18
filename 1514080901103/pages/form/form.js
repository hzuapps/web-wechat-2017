
Page(
  {
    data:{
        name:"",
        sexs:"",
        reason:"",
    },
    
    nameinput:function(e){
      this.setData({
        name: e.detail.value
      })
    },
    radioinput:function(e){
      this.setData({
    sexs:e.detail.value,
      });
    },
    reasoninput: function (e) {
      this.setData({
        reason: e.detail.value
      })
    },
    mybutton: function () {
      var that = this;

      if (this.data.sexs == "man" ) {
        wx.redirectTo({
          url: '../test/test?name=' + that.data.name + '&sex=' + that.data.sexs,
        })
      }
      if (this.data.sexs == "woman") {
        console.log(that.data.name)
        wx.redirectTo({
          url: '../work/work?name=' + that.data.name + '&sex=' + that.data.sexs,
          
        })
      }
      
    },
  }
)