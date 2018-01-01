Page({
  data: {
    imgUrls: [
      '../images/guitar1.jpg',
      '../images/guitar2.jpg',

    ],
    gridData: [{
      name: "每日一课",
      heading: "../images/music_lesson.png",
      route: "../collect/collect"
    },
    {
      name: "吉他弹唱",
      heading: "../images/Guitar_Acoustic.png",
      route: "../collect/collect"
    },
    {
      name: "指弹吉他",
      heading: "../images/fingerstyle_guitar.png",
      route: "../collect/collect"
    },
    {
      name: "声乐/唱歌",
      heading: "../images/vocal.png",
      route: "../collect/collect"
    },
    {
      name: "音乐赏析",
      heading: "../images/music_appreciation.png",
      route: "../appreciate/appreciate"
      
    },
    {
      name: "报名订单",
      heading: "../images/sign_up.png",
      route:"../order/order"
    },
    {
      name: "尤克里里",
      heading: "../images/girl.png",
      route: "../collect/collect"
    },
    {
      name: "视频课程",
      heading: "../images/video_play.png",
      route: "../collect/collect"
    },
    {
      name: "音乐制作",
      heading: "../images/midi.png",
      route: "../create/create"
    }],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    inputShowed: false,
    inputVal: "",

  },

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
  },

});