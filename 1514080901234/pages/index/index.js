//index.js
//获取应用实例
const app = getApp()
var content;
Page({
  data: {
    items: [
      //默认选择英文
      { name: 'USA', value: '英文', checked: true },
      { name: 'CHN', value: '中文' },
      { name: 'JPN', value: '日文' },
      { name: 'KOR', value: '韩文' },
    ]
  },
  //事件处理函数
  bindViewTap: function () {
  },

  onLoad: function () {
  },

  radioChange: function (e) {
    console.log("radio发生了改变，值为：", e.detail.value)
  },

  formSubmit: function (e) {
    content = e.detail.value.text;
    console.log("用户输入的待翻译文本为：", content);
    if (!content) {
      this.setData({
        hasError: true,
        errorText: "待翻译文本不能为空，请重新输入！"
      })
    } else {
      this.setData({
        hasError: false
      })

      //显示加载框
      wx.showLoading({
        title: '正在翻译',
      })
    }
    //开启加载框2秒后隐藏，模拟网络请求
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  textChange: function (e) {
    content = e.detail.value;
    //隐藏错误提示
    if (content) {
      this.setData({
        hasError: false
      })
    }
  }
})
