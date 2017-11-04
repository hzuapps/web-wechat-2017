//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: {}
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration:3000,
      timingFunction: 'ease-in-out',
    })
    this.animation = animation
    animation.rotate(360).step()    
   setTimeout(function () {
     animation.rotate(360).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 10)
  }
})