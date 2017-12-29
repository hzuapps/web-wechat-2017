
Page({
  data: {
    weizhi: [{
      one: "广东惠州惠城区",
      two: "港汇"
    },
    {
      one: "广东惠州惠阳区",
      two: "惠阳高级中学"
    },
    {
      one: "广东惠州惠东县",
      two: "大润发"
    },
    {
      one: "广东惠州惠东县",
      two: "万顺家"
    },
    {
      one: "广东惠州惠东县",
      two: "惠东县人民医院"
    },
    {
      one: "广东惠州惠东县",
      two: "惠东县妇幼保健院"
    },
    {
      one: "广东惠州惠东县",
      two: "惠东高级中学"
    },
    {
      one: "广东惠州惠东县",
      two: "惠东中学"
    }]
  },
  more: function (e) {
    console.log(e);
    var xin = {
      one: "未知省份",
      two: "未知地点"
    };
    //
    if (this.data.weizhi.length <= 7) {
      this.data.weizhi.push(xin)
      this.setData({
        weizhi: this.data.weizhi
      })
    } else {
      console.log("待定")
    }
  },
  jump_new_index: function () {
    wx.navigateTo({
      url: '../new_index/new_index',
    })
  },
  jump_tieshi: function () {
    wx.navigateTo({
      url: '../tieshi/tieshi',
    })
  }
})