Page({
  /**
   * 页面的初始数据
   */
    data: {
    ListLi:[],
      page: 0,
      isLower : false, //是否已滑动到底部
    },
  
    //初始化数据
    initData: function () {
        var _lis = [];
        for (var i = 0; i < 20; i++) {
            _lis.push("30  肥胖");
          }
        this.setData({
      listLi: _lis,
            page: 1
          })
    },

    /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
          var that = this;
        try {
            //初始化数据
              this.initData();
          } catch (e) { console.log(e.message) }
        console.log(this.data.listLi);
      },

    /**
   * 滑动到底部时
   */
    lower:function() {
        console.log("已滑动到底部")
       let _page = this.data.page + 1;
        let _lis = this.data.listLi;
      //滑动到底部时，继续向下滑动则继续加载数据
        for(var i = (_page - 1) * 20; i < _page * 20; i++) {
          _lis.push("30  肥胖");
           }
      this.setData({
    listLi: _lis,
          page: _page,
          isLower: true,
        })
  }
}) 