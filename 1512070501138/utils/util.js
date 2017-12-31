
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

//【判断传入的对象是否是函数】
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * 方法说明:网络请求模块
 * 
 */
function request(option, successCb, errorCb, completeCb) {
  wx.request({
    url: option.url,// 开发者服务器接口地址
    data: option.data ? option.data : {},//请求的参数
    method: option.method ? option.method : 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: option.header ? option.header : { 'content-type': 'application/json' }, // 设置请求的 header
    success: function (res) {//收到开发者服务成功返回的回调函数
      isFunction(successCb) && successCb(res);
    },
    error: function () {//接口调用失败的回调函数
      isFunction(errorCb) && errorCb();
    },
    complete: function () {//接口调用结束的回调函数（调用成功、失败都会执行）
      isFunction(completeCb) && completeCb();
    }
  });
}

/**
 * 显示消息提示框
 */
function showLoading() {
  wx.showToast({
    title: '加载中',
    icon: 'loading',
    duration: 3000
  });
}

/**
 * 隐藏消息提示框
 */
function hideLoading() {
  wx.hideToast();
}

module.exports = {
  formatTime: formatTime,
  request: request,
  showLoading: showLoading,
  hideLoading: hideLoading
}

