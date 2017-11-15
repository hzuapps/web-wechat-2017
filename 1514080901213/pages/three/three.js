Page({
  data: {
    history: [{
      thems: "白天",
      comment: "黑夜"
    },
    {
      thems: "春天",
      comment: "夏天"
    },
    {
      thems: "秋天",
      comment: "冬天"
    },
    {
      thems: "明天",
      comment: "后天"
    },
    {
      thems: "恭喜",
      comment: "发财"
    },
    {
      thems: "泰迪",
      comment: "熊"
    },
    {
      thems: "万事",
      comment: "如意"
    },
    {
      thems: "好好",
      comment: "对对"
    }]
  },
  reg: function (e) {
    console.log(e.detail.value);
    var value = e.detail.value
    value.thems = e.detail.value.thems
    value.comment = e.detail.value.comment
  },
  more: function (e) {
    console.log(e);
    var newGuy = {
      thems: value.thems,
      comment: value.comment
    }
    if (this.data.history.length <= 20) {
      this.data.history.push(value)
      this.setData({
        history: this.data.history
      })
    } else {
      console.log("待定")
    }
  }
})