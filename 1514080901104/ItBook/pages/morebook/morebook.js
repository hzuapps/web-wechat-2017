// pages/morebook/morebook.js

var config=require('../../config.js');   //导入配置文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    board:'',         //顶部图片，每类图书有一个顶部封面变量，需要在服务器上的json文件中添加
    booklist:[],      //每类图书的音乐列表，比如C++类的书籍全部存放在这里
    loading:false,    //加载标识
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this;
    var topid=options.type;                     //获取页面跳转传过来的参数
    topid=topid/1000;
    var url = config.config.jsonTypeFile+topid+".json";             //组合形成书籍科入口（是一类书的入口而不是一本书的入口）
    console.log(url);
    this.setData({
      loading:true,
      requestUrl:url,
    })
    //加载书籍列表
    wx.request({
      url: url,    //先暂时用以上传书籍的链接作为测试，测试完毕后再修改链接格式
      success:function(e){
        console.log("requst成功");
        console.log(e);
        var booklist=e.data.booklist;  //这句先注释掉，用testbooklist来测试
        self.setData({
          board:e.data.board,       //保存封面图片
          booklist:booklist,        //保存书籍列表
          loading:false,              //隐藏加载提示信息
        });
        //将书籍列表保存到本地缓存中
        wx.setStorageSync('booklist', booklist);
      },
      fail:function(e){
        console.log("request book fail");
      }
    });
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
  
  }
})