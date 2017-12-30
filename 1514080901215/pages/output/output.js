// hzu580/output/output.js
var app = getApp();
Page({
  
  //发布按钮函数
  formSubmit: function (e) {
    var that = this

    if (e.detail.value.type == "0") {
      if (e.detail.value.InputMissionType == "" || e.detail.value.InputMissionType == " " || e.detail.value.InputMissionType == "   " || e.detail.value.InputMissionType == "    " || e.detail.value.InputMissionType == "  ") {
        this.openAlert('发布前请填写任务类型')
      }
      else {
        e.detail.value.type = e.detail.value.InputMissionType
      }
    }

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (e.detail.value.type == "0") {
      that.openAlert("发布前请填写任务类型")
    }
    else if (e.detail.value.description == "") {
      that.openAlert("任务详情不能为空")
    }
    else if (e.detail.value.summary == "") {
      that.openAlert("任务简介不能为空")
    }
    else if (e.detail.value.reward == "") {
      that.openAlert("求求你悬赏一点积分吧")
    }
    else {
      wx.request({
        url: 'https://hzu580.cn/Hzu580Server/mission_create',
        data: {
          summary: e.detail.value.summary,
          description: e.detail.value.description,
          type: e.detail.value.type,
          sex_limit: e.detail.value.sex_limit,
          is_show_tel: e.detail.value.is_show_tel,
          is_fast_mode: e.detail.value.is_fast_mode,
          is_safe_mode: e.detail.value.is_safe_mode,
          building: e.detail.value.building,
          room: e.detail.value.room,
          reward: e.detail.value.reward
        },
        header: app.globalData.header,
        success: function () {
          that.openToast();
          wx.switchTab({
            url: '../index/index',
          })
        },
        fail: function () {
          that.openAlert("糟糕！发布失败")
        }
      })
    }
  },
  

  /**
   * 页面的初始数据
   */
  data: {
    person_info: '',
    radioItems: [
      { name: '', value: '0', checked: true, showed: true },
      { name: '取快递', value: '取快递' },
      { name: '电脑维修', value: '电脑维修' },
      { name: '电器维修', value: '电器维修' },
      { name: '借车', value: '借车' },
      { name: '代购', value: '代购' }
    ],
    sexItems: [
      { name: '男', value: '0' },
      { name: '女', value: '1' },
      { name: '不限', value: '2', checked: true }
    ],
    telItems: [
      { name: '显示', value: "true", checked: true },
      { name: '隐藏', value: "false" }
    ],
    modeItems: [
      { name: '快速模式', value: "true", checked: true },
      { name: '二次确认', value: "false" }
    ],
    limitItems: [
      { name: '非限模式', value: "false", checked: true },
      { name: '限制模式', value: "true" }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  }
})