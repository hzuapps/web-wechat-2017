// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'hello',
    area: 'world',
    count: 'world'.length
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
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
    console.dir(event)
    var that = this //this表示当前对象，复制给临时变量that
    
    var text = event.detail.value.text  //这个value.text表示form表单中的所有文本类型的数据

    //不知为何一定要保存，这9行代价，与下面的ontextchange和onchange部分代码相似
    if (!text) {  //当text为空时，执行
      console.dir(text) //打印文件text
      that.setData({
        hasError: true, //当前文字为空，允许error，errorText表示出错显示的文字
        errorText: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError: false //不允许error
      })
    
      //这API是用来存储数据的
      wx.setStorage({
        key: "input",   //本地缓存中指定的key（key暂时是随意数值）
        data: event.detail.value, //需要存储的内容，
        //wx.showToast API是显示消息提示框
        //如果保持成功后会显示“成功”的字体，并用成功的符号(success)的探出
        success: function (res) {
          wx.showToast({
            title: '恭喜发财',  //title:提示的内容
            icon: 'success',   //icon:图标，只能使用'success'(成功）,'loading'(等待)
            duration: 1500    //duration:提示的延时时间
          })

        }
      })
    }
  },

  onTextChange: function (e) {
    var that = this;
    console.dir(e)
    var text = e.detail.value
    console.dir(text);
    if (!text) {
      that.setData({
        hasError1: true,
        errorText1: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError1: false
      })
    }
  },

  onChange: function (e) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)
    if (!value) {
      that.setData({
        hasError2: true,
        errorText2: '文字不能为空！'
      })
    } else {
      that.setData({
        hasError2: false
      })
    }
    that.setData({
      count: value.length
    })
  }
})