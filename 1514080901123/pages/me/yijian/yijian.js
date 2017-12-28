// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    area: '',
    count: 0,
    hasError:false,
    //array:["邮箱","电话"],
    //fangshi:"选择联系方式",
    contact: ["邮箱", "手机", "QQ", "微信"],
    contactIndex: 0,
    Index:"邮箱",
    contactWay:"",     //保存提交后的联系方式
    suggesstion:"",    //保存意见
    userinfo:""          //保存用户信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    wx.getStorage({
      key: 'input',
      success: function (res) {
        //console.log(res.data.area.length)
        //console.log(res)
        that.setData({
          text: res.data.text,
          area: res.data.area,
          count: res.data.area.length,
          contactIndex: res.data.contact
        })
      }
    })
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

  },

  onSubmit: function (event) {
    var that = this
    var text = event.detail.value.text
    var area = event.detail.value.area
    if (!text||!area) {
      that.setData({
        hasError: true,
        errorText: '请确认您是否填写完所有内容'
      })
    } else {
      that.setData({
        hasError: false,
        url:'./success'
      })
      console.log(event)
      wx.setStorage({
        key: "input",
        data: event.detail.value,
        success: function (res) {
          wx.showToast({
            title: '意见提交成功',
            icon: 'success',
            duration: 2000  
          })
            wx.getStorage({               //获取用户输入的信息
            key: 'input',
            success: function (res){
              that.data.contactWay=res.data.text
              that.data.suggesstion=res.data.area
            } 
            })
            wx.getStorage({             //获取用户的基本信息
              key: 'userinfo',
              success: function (res) {
                that.data.userinfo=res.data
              }
            })

          wx.navigateTo({
            url: './success',
          })

        }
      })
    }
  },

  onTextChange: function (e) {
    var that = this;
    var text = e.detail.value
    if (!text) {
      that.setData({
        hasError: true,
        errorText: '请输入您的联系方式'
      })
    } else {
      that.setData({
        hasError: false
      })
    }

  },

  onChange: function (e) {
    var that = this;
    var value = e.detail.value;
    if (!value) {
      that.setData({
        hasError: true,
        errorText: '请编写您的意见'
      })}
      else{
        that.setData({
          hasError:false
        })
      }
    that.setData({
      count: value.length
    })
  },
  bindcontactChange: function (e) {
    var id=e.detail.value;
    this.setData({
      contactIndex: e.detail.value,
     Index: this.data.contact[id]
    })
  },

 /* bindPickerChange :function(e)
  {
    var that=this;
    var id=e.detail.value
    that.setData({
lianxi:this.data.array[id],
      fangshi:this.data.array[id]
  })
  }*/
})