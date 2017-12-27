const app = getApp()
Page({
  data: {
    result: [],
    remark:'',
    amount:'',
    cg:'',
    count:0,
  },

 // onLoad: function (options) {
//    this.getDate('http://baobab.wandoujia.com/api/v2/feed?num=2');
 // },
 //add???
  onLoad: function () {
    var self=this;
    console.log("调用了onload函数");
    this.setData({notes: app.globalData.notes})
    if(this.data.notes) {
      console.log(this.data.notes)
      var yonghu = wx.getStorageSync('yonghu');
      
      self.setData({
        remark:yonghu.remarks,
        amount: yonghu.amount,
        cg:yonghu.radio,
        
      });
    
      
      console.log("测试数据");
      console.log(yonghu);
  
    }
  },
  /**
   * 网络请求的函数：接收一个URL参数
   */
  getDate: function (URL) {
    var that = this;
    // 申请一个网络请求
    wx.request({
      url: URL,
      method: 'GET',
      //添加data
      // data: {
      //  x: '',
      //  y: ''
      //  },
      //添加头信息
      // header: {
      //  'Content-Type': 'application/json'
      // },
      // 请求成功的回调
      success: function (res) {
        that.setData({
          result: res.data
        })
        console.log(res.data)
      }
    })
  },
  //向服务器发出请求
  onShow: function () {
    var self=this;
    console.log("调用了show函数");

    var arr = wx.getStorageSync('dataarr');
    console.log(arr);
    self.setData({
      result:arr
    });


    var yonghu = wx.getStorageSync('yonghu');
    self.setData({
      remark: yonghu.remarks,
      amount: yonghu.amount,
      cg: yonghu.radio
    });
  },
})