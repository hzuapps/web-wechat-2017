Page({
  data: {
    // text:"这是一个页面"
    storageContent: '',
    storageSyncContent: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  /**
   * 异步存储
   */
  listenerStorageSave: function () {
    //以键值对的形式存储 传进去的是个对象
    wx.setStorage({
      key: 'key',
      data: '我是storeage异步存储的信息',
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 异步取信息
   */
  listenerStorageGet: function () {
    var that = this;
    wx.getStorage({
      //获取数据的key
      key: 'key',
      success: function (res) {
        console.log(res)
        that.setData({
          //
          storageContent: res.data
        })
      },
      /**
       * 失败会调用
       */
      fail: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 清除数据
   */
  listenerStorageClear: function () {
    var that = this;
    wx.clearStorage({
      success: function (res) {
        that.setData({
          storageContent: ''
        })
      }
    })
  },


  /**
   * 数据同步存储
   */
  listenerStorageSyncSave: function () {
    wx.setStorageSync('key', '我是同步存储的数据')
  },

  /**
   * 数据同步获取
   */
  listenerStorageSyncGet: function () {
    // var that = this;
    var value = wx.getStorageSync('key')
    this.setData({
      storageSyncContent: value
    })
  },

  /**
   * 清除同步存储数据
   */
  listenerStorageSyncClear: function () {
    wx.clearStorageSync()
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})