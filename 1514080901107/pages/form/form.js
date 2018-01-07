// example/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '1514080901107',
    area: '学会了',
    count: '学会了'.length,
    showSubmitSuccess:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
        wx.getStorage获得key中的内容
   */
    wx.getStorage({
      key: 'input',
      success: function (res) {
        console.log(res.data.area.length)

        that.setData({
          text: res.data.text,
          area: res.data.area,
          count: res.data.area.length
        })
      }
    })
    // 从服务器取回来 JSON
    wx.request({
      url: 'https://infoaas.com/data/hzc.json',
      //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        /*
        that.setData({
          hasError: true,
          errorText: res.data.name + ',' + res.data.teacher + ' ' + res.data.year
        })*/
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
    
    console.dir('提交')
    var that = this
    var text = event.detail.value.text
    var count = event.detail.value.area.length
    if (!text) {
      console.dir(text)
      that.setData({
        hasError: true,
        errorText: '学号不能为空！',
        hasSubmit:false
      })} 
    else 
    {
      that.setData({
        hasError: false,
        hasSubmit: false
      })
      /**
   * wx.setStorage是数据缓存，存储在key中
   */
      if(count < 100){
          wx.setStorage({
            key: "input",
            data: event.detail.value,
            success: function (res) {
              wx.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 2000
              })
            }
          }),
            that.setData({
              hasSubmit: true
            })}
          else  {
          wx.showToast({
          title: '提交失败',
          icon: 'loading',
          duration: 2000,
          success: function (res)
          {
            //console.log('已点击提交')
          }//成功回调函数
        }),
          that.setData({
            hasSubmit: false
          })}
      wx.getStorage({
        key: 'input',
        success: function (res) {
          that.setData({
            text: res.data.text,
            area: res.data.area,
            count: res.data.area.length
          })
        }
      })
    }
  },//onSubmit
  onReset: function () {
    console.log('form发生了reset事件')
    var that=this
    that.setData({
      hasSubmit: false
    })
  
  },
  onTextChange: function (e) {
    var that = this;
    console.dir(e)
    var text = e.detail.value
    console.dir(text);
    that.setData({
      hasSubmit: false
    })
    if (!text) {
      that.setData({
        hasError: true,
        errorText: '学号不能为空！'
      })
    } else {
      that.setData({
        hasError: false
      })
    }
  },

  onAreaChange: function (event){
    var count = event.detail.value.length;
    var that = this;
    var value = event.detail.value;
    console.dir(value)//控制台显示area
    that.setData({
      hasSubmit: false
    })
        if (count > 100) {
          console.dir(count)
          that.setData({
            count: count,
            hasError: true,
            errorText: '字数过多！'
          })
        } else {
          that.setData({
            count: count,
            hasError: false
          })}
  }

})