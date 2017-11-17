var util=require("../../utils/util.js")
var app = getApp()
Page({
  data: {
    nickName:"",
    avatarUrl:"",
    comment:[],
    content:"",
    userlist:[
      {
        avatarUrl:"/image/tangxiang.png",
        nickName:"小可爱",
        time:"3天前",
        desc:"很不错。666"        
      },
       {
        avatarUrl:"/image/wechatHL.png",
        nickName:"我最帅",
        time:"1小时前",
        desc:"非常nice！！！"        
      }
    ]
  },
 
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    wx.getUserInfo({
   success: function(res) {
    var userInfo = res.userInfo
    var nickName = userInfo.nickName
    var avatarUrl = userInfo.avatarUrl
    that.setData({
      nickName:nickName,
      avatarUrl:avatarUrl
    })
  }
})
  },
bindInput:function(e){
  var that=this;
  var value= e.detail.value;
  console.log(value);
  that.setData({
    content:value
  })
},
issue:function(){
  var that=this ;
  var arr=new Array();
  if(this.data.content===""){
    wx.showModal({
  title: '提示',
  content: '请填写评论',
  success: function(res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
  })
  }else{
  arr.push({
    nickName:this.data.nickName,
    avatarUrl:this.data.avatarUrl,
    time:util.formatTime(new Date()),
    desc:this.data.content
  })
  this.setData({
    comment:this.data.comment.concat(arr),
    content:""
  })
  console.log(this.data.comment)
  console.log(this.data.nickName)
 setTimeout (function(){
  wx.showToast({
    title: '评论成功',
    icon: 'success',
    duration: 1500
  })
},1000)
}
},
  wxSearchFn:function(){
    console.log('搜索未定义')
  },
})