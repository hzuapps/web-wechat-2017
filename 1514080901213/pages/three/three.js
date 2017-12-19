/*
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
*/
Page({
  data:{
    //imageUrl: "http://img1.3lian.com/2015/w7/85/d/101.jpg"
    imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512106169564&di=e6ef9d0a9bae9c7208849b0ae138bfde&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D4260769926%2C1262352686%26fm%3D214%26gp%3D0.jpg"
  }
})