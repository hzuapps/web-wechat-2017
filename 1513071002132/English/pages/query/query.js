// pages/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mean:{},
    ukAudio:"",
    usAudio:"",
    inputVal:"",
    result:''
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //单词搜索
  search:function(e){
    var  that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + this.data.inputVal, //接口地址
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data.data);
        if(res.data.data!=""){
        that.setData({
          mean: res.data.data,
          ukAudio: res.data.data.uk_audio,
          usAudio: res.data.data.us_audio,
          result:"1"
        });
        }else{
          that.setData({
            result:"0"
          })
        }
      }
    })

  },
  //播放单词读音
  audio:function(e){
    var that = this;
    var audioSrc = "";
    if(e.currentTarget.dataset.voice == "uk"){
      audioSrc = this.data.ukAudio;
    }else{
      audioSrc = this.data.usAudio;
    }
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = audioSrc
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  
})