//index.js

var config = require('../../config.js');   //导入配置文件
//获取应用实例
const app = getApp()

Page({
  data: {
    /*搜索栏数据 */
    inputShowed: false,
    inputVal: "",
    list:[],        //搜索栏搜索结果
    booksearched:{},//搜索到的书籍
    isfind:false,   //搜索结果
    alltypecount:0, //书籍种类数量
 
    selbooks:[],
   //scroll-view变量start
   windowHeight:0,
   windowWidth:0,
   scrollTop:10,
   //scroll-view表里end

  },
  /*搜索栏函数*/
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
  
  //更新搜索框输入的内容保存到inputVal中
  inputTyping: function (e) {
    var self=this;
    console.log(e.detail.value);
    this.setData({
      inputVal: e.detail.value
    });
    var inputVal = e.detail.value;                  //获取搜索框内的文本·
    var list=[];                                    //保存搜索到的书籍
    var count=0;                                     //list数组的下标
 
    //开始搜索
    var alltypecount = self.data.alltypecount;
    //获取书籍种类种数
    for (var i = 1; i <= alltypecount;i++){           //搜索全部书籍
      var url = config.config.jsonTypeFile+i+"_test"+".json";
      console.log(url);
      wx.request({
        url: url,
        success:function(e){
          var booklist=e.data.booklist;
          console.log("request成功");
              for(var j=0;j<booklist.length;j++){
                var bookname=booklist[j].bookname;
                if (bookname.indexOf(inputVal)>=0){    //如果书籍名中有搜索框文字作为子串
                    list[count]=booklist[j];
                    count=count+1;
                }else{
                  console.log("不存在子串");
                }
            }
            self.setData({
              list:list,
              isFind:true,
            });
            //将搜索到的书籍列表保存到本地缓存中
            wx.setStorageSync('booklist', list);
        },
        fail:function(e){
          console.log("request失败");
          isFind:false;
        }
      })
    }
  },


//按下键盘的搜索按钮时开始搜索
  confirmsearch: function (e) {
  },
  /********* */
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad: function () {
    var self=this;
    //获取窗口大小
    wx.getSystemInfo({
      success:(res)=>{
        self.setData({
          windowHeight:res.windowHeight-5,
          windowWidth:res.windowWidth
        })
      },
      fail:function(res){
        console.log("获取窗口失败");
      },
    });
    //请求selbook.json
    wx.request({
      url: config.config.selBookUrl,
      success:function(e){
        console.log("打印首页书籍");
       console.log(e.data.selbooks);
        console.log("请求本地成功");
        var selbooks=e.data.selbooks;
        self.setData({
          selbooks: selbooks,
        });
        var booklist=[];
        var count=0;
        for(var i=0;i<selbooks.length;i++){
            booklist[count++]=selbooks[i].twobook[0];
            booklist[count++]=selbooks[i].twobook[1];
        }
        console.log(booklist);
        wx.setStorageSync('booklist', booklist);
      }
    });
    wx.request({
      url: config.config.condition,
      success: function (e) {
        console.log("请求询问资源情况成功");
        self.setData({
          alltypecount:e.data.alltypecount,
        })

      },
      fail: function (e) {
        console.log("请求询问资源情况失败");
      }
    });
  },

  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  //scroll-view相关函数start
  upper: function (e) {
 
  },
  lower: function (e) {

  },
  scroll: function (e) {

  },
  tap: function (e) {
  
  },
  tapMove: function (e) {
  },
  //scroll-view相关函数end
  
})
