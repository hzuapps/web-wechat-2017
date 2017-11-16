Page({
  data: {
    history: [{
      thems: "学习",
      comment: "待定"
    },
    {
      thems: "学习",
      comment: "待定"
    },
    {
      thems: "学习",
      comment: "待定"
    },
    {
      thems: "学习",
      comment: "待定"
    },
    {
      thems: "学习",
      comment: "待定"
    } ,
    {
      thems: "学习",
      comment: "待定"
    },
    {
      thems: "学习",
      comment: "待定"
    }]
  },
  more: function (e) {
    console.log(e);
    var newlog = {
      thems: "这是主题",
      comment: "这是备注"
    };
    //模拟数据
    if (this.data.history.length <= 20) {
      this.data.history.push(newlog)
      this.setData({
        history: this.data.history
      })
    } else {
      console.log("待定")
    }
}
})