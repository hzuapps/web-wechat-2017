// 在需要使用的js文件中，导入js  
var util = require('../../utils/util.js');
Page({
  data: {
  content: '',
  img1:'../../example/images/icon_tabbar.png',
  img2: '../../example/images/icon_tabbar.png',
  img3: '../../example/images/icon_tabbar.png'
  },
  onLoad: function (e) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    });
   /* 
   var that = this;
    wx.getStorage({
      key: "input",
      success: function (res) {
        that.setData({
          qc: res.data,
        })
      }
    });
*/
    var id = e.id;
    if (id) {
      getData(id, this);
    } else {
      this.setData({
        id: Date.now()
      })
    }
  },

  /**
   * input change事件
   */
  change(e) {
    var val = e.detail.value;
    this.setData({
      content: val
    });
  },
  /**
   * cancel 事件
   */
  cancel() {
    wx.navigateBack();
  },

  sure() {
    var reg = /^\s*$/g;
    if (!this.data.content || reg.test(this.data.content)) {
      console.log('不能为空');
      return;
    }
    this.setData({
      time: Date.now()
    });
    setValue(this);
    wx.navigateBack();
  },

  onSubmit: function (event) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)

    wx.setStorage({
      key: "input",
      data: e.detail.value,
    })
  },

  onChange: function (e) {
    var that = this;
    var value = e.detail.value;
    console.dir(value)

    wx.setStorage({
      key: "input",
      data: e.detail.value,
    })

  }

}) 



/**
 * 根据跳转的url中的id获取编辑信息回填
 */
function getData(id, page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item) => {
      if (item.id == id) {
        page.setData({
          id: item.id,
          content: item.content
        })
      }
    })
  }
}

/**
 * 设置填写的信息，分编辑、新增
 */
function setValue(page) {
  var arr = wx.getStorageSync('txt');
  var data = [], flag = true;
  if (arr.length) {
    arr.forEach(item => {
      if (item.id == page.data.id) {
        item.time = Date.now();
        item.content = page.data.content;
        flag = false;
      }
      data.push(item);
    })
  }
  if (flag) {
    data.push(page.data);
  }
  wx.setStorageSync('txt', data);
}