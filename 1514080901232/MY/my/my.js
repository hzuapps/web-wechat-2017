//var time = require("../../utils/util");

Page({
  data: {
    lists: [
      {
        
      }
    ]
  },
  
  onLoad() {
    
    initData(this);
  },
 
  onShow() {
    initData(this);
  },
  edit(e) {    
    var id = e.currentTarget.dataset.id;
    console.log(id)
    wx.reLaunch({
      url: '/HIS/his/his?id=' + id
    })
  },
  
  remove(e){
    var arr = wx.getStorageSync('txt'); 
    var id = e.currentTarget.dataset.id;
    for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      console.log(i);
      arr.splice(i, 1);
      wx.setStorageSync('txt', arr);
      //很重要 不然localstorage里面的数据没有被删除
    }    
  }
    this.setData({
      lists: arr
    });

    
  }
})

function initData(page) {
  var arr = wx.getStorageSync('txt');
  if (arr.length) {
    arr.forEach((item, i) => {
      var t = new Date(Number(item.time));
      item.time = formatTime(t);
    })
    page.setData({
      lists: arr
    })
  }
}


function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

