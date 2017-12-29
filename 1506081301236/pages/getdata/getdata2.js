Page
({
  data:{
       title:'1111',
        text:'22222',
        index:''
  },
  onLoad: function (options)       //触发的对象
  {
    var that = this;
    const index = options.index;              //传递过来的值存在于index参数中，此句为将传递过来的值赋值给index常数  
    console.log(index);
    wx.request({
      url: 'https://infoaas.com/data/1513071001110/ssj.json',//仅为事例，并非真实接口
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.ssj[index].ssj)
        that.setData({
          title: res.data.ssj[options.index].ssj,
          text: res.data.ssj[options.index].ssj
        })
      }
    })
  }
})