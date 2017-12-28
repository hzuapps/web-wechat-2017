// pages/download/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{},              //传入的书籍信息
    isDownloading:false,  //下载状态
    hidden:false,
    isScroll: true,
    //download按钮相关控制数据start
    primarySize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    //download按钮相关控制数据end
    windowHeight:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this;
    var bookid=options.bookid;      //获取页面跳转传过来的参数，即书籍ID
    //获取窗口信息
    wx.getSystemInfo({
      success: (res) => {
        self.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
      },
      fail: (res) => ({
      }),
    });
    //获取书籍信息
    if(bookid==undefined){//未传入书籍ID
      //console.log("未传入书籍")
      var curBook=wx.getStorageSync('curBook')||{}; //从缓存中获取书籍
      if(curBook==undefined){ //缓存中无歌曲
        //console.log("缓存中无书籍");
        var book={bookname:'未选择书籍'};    //显示未选择书籍
        this.setData({
          book:book,
          hidden:true,
        })
      }else{
        this.setData({
          book:curBook,
          hidden:true,
        });
      }
    }else{    //有传入书籍
      console.log("有书籍传入");
      var booklist=wx.getStorageSync('booklist') || []; //从缓存中取出书籍列表
      console.log(booklist);
      //在书籍列表中查找bookid指定的歌曲
      for(var i=0;i<booklist.length;i++){
        if(booklist[i].bookid==bookid){  //找到对应的歌曲
          //console.log("找到对应书籍");
          console.log(booklist[i]);
          this.setData({
            book:booklist[i],         //更新书籍
            hidden:true,
          });
          break;
        }
      }
      //缓存正在下载的书籍
      wx.setStorageSync('curBook',this.data.book);
      this.setData({
        hidden: true,
      });
    }
  },

  //下载书籍
  /*
  downloadbook:function(e){
    var self=this;
    var url=this.data.book.downurl;
    wx.downloadFile({
      url: url,
      success: function (res) {
        console.log("下载到本地成功");
        var filePath = res.tempFilePath;
        console.log(res);
        console.log(filePath);
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功');
          },
          fail: function (res) {
            console.log("打开文档失败");
            console.log(res);
          },
        })
      },
      fail: function (res) {
        console.log(res);
        console.log("下载到本地失败");
      }
    });
  },
*/
//一键复制下载链接
  copeurl:function(res){
    var self=this;
    var bookurl = this.data.book.pandownurl;
    if(bookurl!=undefined){
      wx.setClipboardData({
        data: bookurl,
        success:function(res){
          wx.showToast({
            title: '复制链接成功',
            icon: 'success',
            duration: 500
          });
        },
        fail:function(res){
          wx.showToast({
            title: '复制链接失败',
            icon: 'loading',
            duration: 500
          });

        }
      })
    }else{
        console.log("下载链接无法识别");
    }
  },

//一键复制下载密码
  copepasswd:function(res){
    var self = this;
    var passwd = this.data.book.panpasswd;
    if (passwd != undefined) {
      wx.setClipboardData({
        data: passwd,
        success: function (res) {
          wx.showToast({
            title: '复制密码成功',
            icon: 'success',
            duration: 500
          });
        },
        fail: function (res) {
          wx.showToast({
            title: '复制密码失败',
            icon: 'loading',
            duration: 500
          });

        }
      })
    } else {
      console.log("下载密码无法识别");
    }
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
  onShareAppMessage: function (res) {
  }
})