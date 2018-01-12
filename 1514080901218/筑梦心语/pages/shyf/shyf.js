var util = require('../../utils/util.js');
Page({

  data: {

    checkbox: [],

    array: ['A',
      'B', 'C'],

    isReview: false,

    isVerify: false,

  },
  onLoad: function () {
    
  },


  insert: function () {

    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    });

    var cb = this.data.checkbox;



    cb.push(this.data.checkbox.length);
    console.log(this.data.checkbox);

    this.setData({

      checkbox: cb

    });

  },

  delBind: function () {

    var cb = this.data.checkbox;

    console.log(cb);

    cb.pop(this.data.checkbox.length);

    this.setData({

      checkbox: cb

    });

  },



})