Page({
  data:{
    shuju:["456","789"]
  },
  mobaigongju:function(e){
    var erbai
    erbai = e.detail.value
    this.data.shuju = erbai.concat(this.data.shuju)
    this.setData({
      shuju: this.data.shuju
    })

  }
})