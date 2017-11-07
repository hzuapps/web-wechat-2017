//index.js
//获取应用实例
//const app = getApp()

Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: '../../resources/cyx.jpeg',
    name: '不要说话',
    author: '陈奕迅',
    src: '../../music/1.mp3',
  },
 
  onLoad: function () {  
   
    },
  
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }  
     })
