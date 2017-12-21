
const app = getApp()

Page({
  data: {
    imageList:"../images/picture.png",
    nickname: "",
    userinfo:"",
    list:[],
    hiddenmodalput: true,
    hiddenmodalput2: true,
    inputvalue: "",
    inputvalue2: "",
    textareadisable:true,
    buttontext:"编辑代码",
    lineif:true,
    lines:0,
   testvalue:"",
   testvalue2: "",
   ifshow:false,
   textareadisable2:true
  },
  redirectdemo:function(){
          wx.redirectTo({
            url: '../info/info',
          })
  },
  editdemo: function () {
    var pre=wx.getStorageSync('demo');
    var that=this;
    if (that.data.textareadisable){
    this.setData({
      textareadisable: !that.data.textareadisable,
      buttontext:"提交",
      textvalue2: wx.getStorageSync('demo'),
      ifshow: false
    });
    
    }else
    {
    
      if (that.data.textvalue != pre) {
   
        wx.showToast({
          title: '代码发生修改',
          icon: 'success',
          duration: 2000
        });
        that.setData({
      ifshow:true,
      textvalue: wx.getStorageSync('demo')
        })
      };

      this.setData({
        textareadisable: !that.data.textareadisable,
        buttontext: "编辑代码"
      })
    };
    
  },
  chooseImage: function (event) {
    var that = this;
    wx.showActionSheet({
      itemList: ['设置用户昵称', '设置用户简介', '设置用户头像'],
      success: function (res) {
        
        
        if (res.tapIndex == 0) {
          that.modalinput();
        }

        if (res.tapIndex == 1) {
          that.modalinput2();
        }
      
      if (res.tapIndex==2)
        {
          wx.chooseImage({
            count: 1, 
            sizeType: ['original', 'compressed'], 
            sourceType: ['album', 'camera'], 
            success: function (res) {
              var imgeList2 = res.tempFilePaths;
              that.setData({
                imageList: imgeList2
              });
              console.log(imgeList2);
              wx.setStorageSync(
                'key', '' + that.data.imageList
              );
            }
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })  
  
  },
  
  onLoad:function(option){
    var var1 = wx.getStorageSync('key') || this.data.imageList;
    var var2 = wx.getStorageSync('nickname') || this.data.nickname;
    var var3 = wx.getStorageSync('userinfo') || this.data.userinfo;
     this.setData({
       imageList:var1,
       nickname:var2,
       userinfo:var3,
       textvalue: wx.getStorageSync('demo')
     });
  },
  textinput3:function(e){
      wx.setStorageSync(
        'demo', '' + e.detail.value
      );
    
  },
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },  
  modalinput2: function () {
    this.setData({
      hiddenmodalput2: !this.data.hiddenmodalput2
    })
  },
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },

  confirm: function () {
    this.setData({
      hiddenmodalput: true,
      nickname: wx.getStorageSync('nickname'),
      inputvalue: ""
    })
  }  ,
 

  cancel2: function () {
    this.setData({
      hiddenmodalput2: true,
    
    });
  },
   
  confirm2: function () {
    this.setData({
      hiddenmodalput2: true,
      userinfo: wx.getStorageSync('userinfo'),
      inputvalue2:""
    })
    
  },

   textinput:function(e){
     wx.setStorageSync(
       'nickname', '' + e.detail.value
     );
   },
   
   textinput2: function (e) {
     wx.setStorageSync(
       'userinfo', '' + e.detail.value
     );
   },
  exit:function()
  {
    wx.redirectTo({
      url: '../index/index'
    })
  }
})
