Page({
  globalData:{
    userInfo:null,
    notes:[{'title':'haha','detail':'1'}
      , { 'title': 'lala', 'detail':'2'}
      , { 'title': 'lolo', 'detail':'3'}]
  },
  saveNote:function(e){
    var obj=e.detail.value;
    var title=obj.title;
    var detail=obj.detail;
    if(title.length<=0 || detail.length<=0){
      return;
    }
    this.data.notes.push(obj);
    var update=this.data.notes;
    console.log(update);
    app.globalData.notes=update;
    wx.redirectTo({
      url:'../four/four'
    })
  }
})