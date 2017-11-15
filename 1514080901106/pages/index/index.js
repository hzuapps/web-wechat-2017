var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    tabs: ["滤镜", "调整", "show"],
    activeIndex: 2,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  onLoad: function () {
     var that = this;
     wx.getSystemInfo({
        success: function (res) {
           that.setData({
              sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
              sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
           });
        }
     })
  },
  tabClick: function (e) {
     console.dir("done");
     this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
     })
  },

  toShow:function(e){
    wx.navigateTo({
      url: '../show/show'
    })
  }

});
