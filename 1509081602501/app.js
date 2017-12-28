import {log, promiseHandle} from 'utils/util';
import locales from './utils/locales'
import T from './utils/wxapp-i18n'

T.registerLocale(locales)
T.setLocale('zh-Hans')
wx.T = T

App({
  onLaunch() {
    this.clearStorageAfterUpdated()
  },
  clearStorageAfterUpdated() {
    wx.getStorage({
      key: 'version',
      success: (res) => {
        if (res.data !== this.globalData.version) {
          wx.clearStorage()
          this.setVersion()
        }
      },
      fail: (res) => {
        this.setVersion()
      },
    })
  },
  setVersion() {
    wx.setStorage({
      key: 'version',
      data: this.globalData.version,
    })
  },

  getUserInfo(cb) {
    if (typeof cb !== "function") return;
    let that = this;
    if (that.globalData.userInfo) {
      cb(that.globalData.userInfo);
    } else {
      promiseHandle(wx.login).then(() => promiseHandle(wx.getUserInfo)).then(res => {
        that.globalData.userInfo = res.userInfo;
        cb(that.globalData.userInfo);
      }).catch(err => {
        log(err);
      });
    }
  },

  globalData: {
    userInfo: null
  },

  //自定义配置
  settings: {
    debug: true, //是否调试模式
    moreLink: 'http://github.com/oopsguy',
    version: "1.1.0",
    env: "prod",

  }
});  