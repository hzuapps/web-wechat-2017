// pages/comp/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //search
    inputShowed: false,
    inputVal: "",
    diary: [
      {
        d_title: "落灰 蚊帐",
        d_desc: "感冒了 有几次 在图书馆写论文的时候 流鼻涕 还以为是流鼻血 弄得紧张兮兮",
        d_time:"2005-10-03 21:15:31"
      },
      {
        d_title: "椅子上 蹲",
        d_desc: "我一直一直在想你 思念带来前所未有的甜蜜",
        d_time: "2005-10-24 20:22:51"
      },
      {
        d_title: "鞋带总开的红色 allstar",
        d_desc: "最近的心情一直在漂浮着的感觉 不着地 就是恍惚 没有理由的 也不知道要说些什么",
        d_time: "2005-11-26 21:34:46"
      },
      {
        d_title: "棉鞋里已经湿透的袜子",
        d_desc: "你说 不要再给我买东西了 别在再浪费钱的时候 我在想 我不怕浪费钱 我没有那么多钱浪费 我只怕我的那么多的感情你都不在乎",
        d_time: "2005-12-24 12:54:48"
      },
      {
        d_title: "起了 毛球的红色帽子",
        d_desc: "为什么 每个圣诞节 都会觉得 很寂寞",
        d_time: "2005-12-25 11:15:31"
      },
      {
        d_title: "封面有果汁 渍印的流行小说",
        d_desc: "我开始不相信这些 关于你的 关于我的 关于语言 关于表情 关于神态 那些诺言 那些思念 那些温柔的叮嘱 和残酷的对白 我都不想再相信了 慢慢地我开始 只 相信 时间",
        d_time: "2006-01-05 15:24:09"
      },{
        d_title: "嘀哒 嘀哒 嘀哒",
        d_desc: "“最喜欢早上 好像什么都可以重新开始 中午的时候就开始觉得忧伤 晚上最难度过” 日日如此",
        d_time: "2006-01-09 11:34:46"
      },
      {
        d_title: "黯淡水汽中的摩天轮",
        d_desc: "对不起 我不能对你微笑 对不起 我不能和你讲话 这是一个种满仙人掌的花房 我拿着一个叫做幸福的气球站了很久 很久",
        d_time: "2006-01-12 12:54:48"
      },
      {
        d_title: "睡觉前 总要发个短信",
        d_desc: "昨天晚上和萌萌发消息 她说 其实大家都是普通人 都挺善良的 也都傻 怕寂寞 有的时候耍一些小聪明 都希望别人对自己好一点 可又懒得付出 就这样而已 我没有回复 不过觉得她说得很好",
        d_time: "2006-01-26 22:15:31"
      },
      {
        d_title: "动感 新势力",
        d_desc: "也许 等到一切归迹于无声的时候 才能让你真正听到那句 我喜欢你 不管之前的喧嚣怎样爬过我们的伤口 但剩余的每一天 都会在每一个 喜欢你的日子里 被你喜欢",
        d_time: "2006-01-27 20:22:51"
      },
      {
        d_title: "吃了五顿 的一天",
        d_desc: "瘦怎么了?又不是我不想胖（可能是我不想胖……） 我是瘦 可是我很健康 所以 爸爸和妈妈的那些朋友们啊 请不要再 一边摇头 一边用不可思议的表情说 这孩子怎么这么瘦啊",
        d_time: "2006-02-01 21:44:46"
      },
      {
        d_title: "粘了 头发丝的枕头套",
        d_desc: "开始放假 每天上午十一点左右起来 下午四点多睡一个小时 晚上一点多再睡 名副其实的有规律 错乱生活",
        d_time: "2006-02-06 12:54:48"
      },
      {
        d_title: "喝多了以后 很真诚地 小便",
        d_desc: "很认真地思考了以后 确定了两个事情 一 初恋是 那个初中同学 二 最开始 喜欢上大学的女朋友 是因为 我骑自行车载她 她很自然地搂了我的腰",
        d_time: "2006-02-08 11:15:31"
      },
      {
        d_title: "每次生病 都觉得自己要死了",
        d_desc: "生病了 用我向我同学形容的话讲 就是 脑袋好像变成了一个被人含在嘴里的棉花 不知道 是感冒还是发烧 说实话 我一直分不清楚这两种病的区别",
        d_time: "2006-07-10 15:24:09"
      }, {
        d_title: "ck truth香水 的瓶子很不受控",
        d_desc: "亲爱的不二： 要离 喜欢搬弄是非的人远一些 不论他说的是真的 还是假的 听了对你都没有好处的",
        d_time: "2006-08-06 11:34:46"
      },
      {
        d_title: "每次去 Mc都能看到的 开满花的树",
        d_desc: "可能是 安静而又小心翼翼的人 可是 有的时候 觉得自己有恬不知耻的热情 它们犹如雨后不知名的大片花朵一夜之间盛开 然后凋落",
        d_time: "2006-08-16 22:54:48"
      }
    ]
    },

     

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置窗口大小
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight - 5,
          windowWidth: res.windowWidth
        })
        //console.dir(that.data.windowHeight)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onUpper: function () { },
  onLower: function () {
    var that = this
    that.setData({
      isLower: false,
      isend:true
    });
    // load more data
    console.log("onLower")
  },
  onScroll: function () {
    console.log("onScroll")
  },

  //searchbar
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
  
})