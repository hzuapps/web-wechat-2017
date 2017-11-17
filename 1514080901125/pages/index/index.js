//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    szb: [
      {
        one: '第一章 T－62，去死！'
      }, {
        two: '“轰隆隆，轰隆隆，嘎吱吱，嘎吱吱…”随着这个声音越来越近，地面似乎也在跟着颤动起来。滑东杰感觉到脑子阵阵发疼，此时，他是躺在地上的，但是，身子仿佛什么劲都使不上，好像是刚入伍的时候，被无耻的教官罚了五百个俯卧撑一样。这声音太吵了，他勉强地睁开眼睛。他奶奶的，到底是怎么回事？看着四周的一切，根本就不是自己熟悉的地形，难道又是一次特殊的作战任务？怎么脑子里，什么印象都没有？'
      },
      {
        three: '滑东杰慢慢地睁开眼睛，这一睁开，就再也合不上了。我日他奶奶的，那个家伙是什么？滑东杰的身子没有起来，只有头先抬了起来。首先看到的，就是那两个不断往前挪动的铁板，随着它的挪动，卷起了半米高的沙土，这是两个履带，滑东杰再熟悉不过了。嘎吱嘎吱的声音，就是这两个履带在行进的过程中，和土地接触发出的声音。在这个履带的后面，是腾起的黑烟，这是坦克的发动机在被坦克手野蛮操作的结果。再将目光向上，滑东杰看到了那个半球形的炮塔，以及那高昂着的炮管。 那个炮管，中部鼓出了一圈，那是炮管的抽烟装置，全世界各种坦克，在滑东杰的脑海里过了一遍，立刻，滑东杰就认了出来。t－62！这不是已经退出了一线的苏制的t－62吗？头疼得厉害，浑身也使不出力气，滑东杰刚刚抬起的头，又回到了地面上。但是，那地面的震动，那坦克的轰鸣，让他有种胆战心惊的感觉。 不对，有问题，这是要死的节奏！'
      }
    ]
  

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
