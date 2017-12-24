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
    var inputVal = e.detail.value;                  //获取搜索框内的文本·
    inputVal = inputVal.toLocaleLowerCase();
    var list = [];                                    //保存搜索到的书籍
    var count = 0;                                     //list数组的下标
    this.setData({
      inputVal: inputVal,
    });

    //开始搜索
    var alltypecount = self.data.alltypecount;
    //获取书籍种类种数
    for (var i = 1; i <= alltypecount;i++){           //搜索全部书籍
      var url = config.config.jsonTypeFile + i + ".json";
      wx.request({
        url: url,
        success:function(e){
          var booklist=e.data.booklist;
              for(var j=0;j<booklist.length;j++){
                var bookname=booklist[j].bookname;
                bookname = bookname.toLocaleLowerCase();
                if (bookname.indexOf(inputVal)>=0){    //如果书籍名中有搜索框文字作为子串
                    list[count]=booklist[j];
                    count=count+1;
                }else{
                }
            }
            if(list.length==0){
            }
            self.setData({
              list:list,
              isFind:true,
            });
            //将搜索到的书籍列表保存到本地缓存中
            wx.setStorageSync('booklist', list);
        },
        fail:function(e){
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
  

  onShow: function () {
    var self=this;
    wx.request({
      url: config.config.selBookUrl,
      success: function (e) {
        var selbooks = e.data.selbooks;
        self.setData({
          selbooks: selbooks,
        });
        var booklist = [];
        var count = 0;
        for (var i = 0; i < selbooks.length; i++) {
          booklist[count++] = selbooks[i].twobook[0];
          booklist[count++] = selbooks[i].twobook[1];
        }
        wx.setStorageSync('booklist', booklist);
      }
    });

  },

  onHide: function () {
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
        wx.showToast({
          title: '获取窗口失败',
          icon: 'loading',
          duration: 2000
        });
        console.log("获取窗口失败");
      },
    });
    //获取推荐书籍情况
    wx.request({
      url: config.config.condition,
      success: function (e) {
        //console.log("请求询问资源情况成功");
        self.setData({
          alltypecount: e.data.alltypecount,
        })

      },
      fail: function (e) {
        wx.showToast({
          title: '询问资源失败',
          icon: 'loading',
          duration: 2000
        });
       
        console.log("询问资源情况失败");
      }
    });
    //请求selbook.json
    wx.request({
      url: config.config.selBookUrl,
      success:function(e){
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
        wx.setStorageSync('booklist', booklist);
      },
      fail: function (e) {
        wx.showToast({
          title: "加载首页失败",
          icon: "loading",
          duration: 2000
        });
        wx.showToast({
          title: e,
          icon: 'loading',
          duration: 5000
        });
        console.log("请求首页书籍信息失败");
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
