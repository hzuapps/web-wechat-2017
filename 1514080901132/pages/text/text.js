Page({
  data: {
    students: [
      {
        sNum: "1",
        name: '鲜虾粥',
        price:'38'
      },
      {
        sNum: "2",
        name: '鱼片粥',
        price: '28'
      }
    
    ]
  },
  listenFormSubmit: function (e) {
    console.log('listenFormSubmit=', e.detail.value)
  },
  //点击重置
  //listenFormReser: function (e) {
  // console.log('listenFormReser=', e.detail.value)
  //},
  listenFormSubmit: function (e) {
   
 //   var index = len;
   // var sn = "students["+index+"].sNum";
    this.setData({
   
    name: e.detail.value.username,
    sNum:e.detail.value.number,
    price:e.detail.value.price
   
    })

  },
})