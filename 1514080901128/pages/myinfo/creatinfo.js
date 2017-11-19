Page({
  data:{
    hobby:[
      {name:'comic',value:'漫画',checked:'ture'},
      {name:'cartoon',value:'动画'},
      { name:'fictions',value:'小说'},
      { name: 'game', value: '游戏' },
    ],
    date:'2016-11-11',
    suggest:'',

  },
  formSubmit:function(e){
    console.log('提交表单');
    console.log(e.detail.value)
    wx.showLoading({
      title: '创建成功',
      icon: '创建成功',
      duration: 2000
    });
    this.setData({
      sex:e.detail.value.sex,
      suggest: e.detail.value.suggest,
      date: e.detail.value.date,
      
    });
   
    wx.navigateTo({
      url: '../mynowinfo/nowinfo' + '?date=' + e.detail.value.date + '&suggest=' + e.detail.value.suggest+'&sex='+e.detail.value.sex
    });     
  },
  formReset:function(){
    console.log("form发生了reset事件")
  },
  bindDateChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },

})