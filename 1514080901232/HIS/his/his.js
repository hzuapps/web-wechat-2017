Page({
  data: {
    
  },
  onLoad(e){
    var id=e.id;
    if(id){
      getData(id,this);
    }else{
      this.setData({
        id:Date.now()
      })
    }
  },
  change(e){
    var val=e.detail.value;
    console.log(val);
    this.setData({
      content:val
    })
  },
 
  sure(){
    var re=/^\s*$/g;
    if(!this.data.content||re.test(this.data.content)){
       wx.showModal({
        title: '内容为空',
        content: '请输入内容',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    else{
    this.setData({
      time:Date.now(),
      
    })
    
    setValue(this);
    wx.setStorage({
      key: "addTel",
      data: this.data.content
    })
    wx.reLaunch({
      url: '/MY/my/my'
    })
  }
  }

})

function getData(id,page){
  var arr=wx.getStorageSync('txt');
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id==id){
        page.setData({
          id:item.id,
          content:item.content
        })
      }
    })
  }
}

function setValue(page){
  var arr=wx.getStorageSync('txt');
  var data=[],flag=true;
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id == page.data.id){
        item.time=Date.now();
        item.content=page.data.content;
        flag=false;
      }
      data.push(item);
      
      })
  }
  if(flag){
    data.push(page.data);
  }
  wx.setStorageSync('txt',data);
}