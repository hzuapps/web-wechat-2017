// hzu580/index/index.js
var app = getApp();
var mission_list_backup = new Array()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasPic: true,
    mission_list: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    })
    that.setData({
      sessions: [{
        name: "Tom",
        icon: "a.png",
        msg: "您好。"
      }, {
        name: "John",
        icon: "b.png",
        msg: "在吗？"
      }, {
        name: "Tom",
        icon: "a.png",
        msg: "您好。"
      }, {
        name: "John",
        icon: "b.png",
        msg: "在吗？"
      }, {
        name: "Tom",
        icon: "a.png",
        msg: "您好。"
      }, {
        name: "John",
        icon: "b.png",
        msg: "在吗？"
      }, {
        name: "Tom",
        icon: "a.png",
        msg: "您好。"
      }, {
        name: "John",
        icon: "b.png",
        msg: "在吗？"
      }]
    })  
    var that = this;
    //检测是否登录
    wx.getStorage({
      key: 'header',
      success: function (res) {
        app.globalData.header.Cookie = res.data
        app.globalData.hasLogin = true
      },
    })
    wx.request({
      url: 'https://hzu580.cn/Hzu580Server/mission_listMain',
      data: {
        fast_mode_limit: '2',
        sex_limit: '2',
        time_ago: '0',
        reward: '0',
        building: '',
        limit: '2',
        next_id: '-1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        for (var i = 0; i < res.data.length; i++) {
          //设置显示时间
          res.data[i].create_time = app.setTime(res.data[i].create_time)
        }
        mission_list_backup = res.data
        that.setData({
          mission_list: res.data
        })
      }
    })

  },
  //index页面点击事件触发缓存当前点击的card任务信息
  storage_mission: function (e) {
    wx.setStorageSync('missionId', mission_list_backup[e.currentTarget.dataset.orderid])
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(errorImgArray[0],"a[0]")
    // for(var i=0;i<errorImgArray.length;i++){
    //   this.data.mission_list[errorImgArray[i]].owner.uid='touxiangh'
    // }
    // this.setData({
    //   mission_list: this.data.mission_list
    // })
    // var that=this
    // setTimeout(function () {
    //   console.log(that.data.mission_list, "ready")
    // },3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.request({
      url: 'https://hzu580.cn/Hzu580Server/mission_listMain',
      data: {
        fast_mode_limit: '2',
        sex_limit: '2',
        time_ago: '0',
        reward: '0',
        building: '',
        limit: '2',
        next_id: '-1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        for (var i = 0; i < res.data.length; i++) {
          //设置显示时间
          res.data[i].create_time = app.setTime(res.data[i].create_time)
        }
        mission_list_backup = res.data
        console.log(res)
        that.setData({
          mission_list: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  onEnd: function (e) {
    console.dir(e)
    var that = this;
    that.setData({
      //isLower: true,
      sessions: that.data.sessions.concat([{
        name: "Tom 1111",
        icon: "a.png",
        msg: "您好。"
      }, {
        name: "John 2222",
        icon: "b.png",
        msg: "在吗？"
      }])
    })

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  otherPeople: function (e) {
    //缓存点击到的头像的用户信息
    wx.setStorageSync('otherInfo', this.data.mission_list[e.currentTarget.dataset.orderid]);
    wx.navigateTo({
      url: '../other_people/other_people',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //头像图片路径失效触发函数
  errorImage: function (e) {
    var errorImgIndex = e.currentTarget.dataset.orderid //获取循环的下标
    var uid = 'mission_list[' + errorImgIndex + '].owner.uid'
    this.setData({
      [uid]: 'touxiangh'
    })
  },
  //下拉触发函数
  onPullDownRefresh: function () {
    var that = this
    wx.request({
      url: 'https://hzu580.cn/Hzu580Server/mission_listMain',
      data: {
        fast_mode_limit: '2',
        sex_limit: '2',
        time_ago: '0',
        reward: '0',
        building: '',
        limit: '2',
        next_id: '-1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        for (var i = 0; i < res.data.length; i++) {
          //设置显示时间
          res.data[i].create_time = app.setTime(res.data[i].create_time)
        }
        mission_list_backup = res.data
        that.setData({
          mission_list: res.data
        })
      }
    })
    wx.stopPullDownRefresh()
  }

})