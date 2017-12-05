var sliderWidth = 100; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["我发起的", "我参与的"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {

              console.log(res);

                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length *   that.data.activeIndex
                });
            }
        }); 
        wx.request({
          url: 'https://infoaas.com/data/hzc.json',
          //仅为示例，并非真实的接口地址
          data: {},
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data)
            /*
            that.setData({
              hasError: true,
              errorText: res.data.name + ',' + res.data.teacher + ' ' + res.data.year
            })*/
          }
        })
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});