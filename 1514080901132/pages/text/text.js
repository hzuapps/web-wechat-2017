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
      },
      {
        sNum: "3",
        name: '兴国米粉鱼',
        price: '12'
      },
      {
        sNum: "4",
        name: '深海龙利鱼',
        price: '16'
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
    sNum:"6-",
    name: e.detail.value.username,
    price:"-18"
    })

  },
})