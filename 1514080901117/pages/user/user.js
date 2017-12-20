Page({
  data: {
    history:[]
  },
  more: function (e) {
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
    }
  },
  onLoad: function() {
    
  }

}
)