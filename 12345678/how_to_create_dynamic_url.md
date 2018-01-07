# 如何创建动态链接

## 1. 理解URL

```
https://infoaas.com/data/one.json?param1=1&param2=2
```

参考文献：http://blog.csdn.net/u012314708/article/details/50428153 

## 2. 准备动态链接的参数 

准备好动态数据值：

```
Page({
  id: 0,
  onLoad: function(e) {
    // 设置参数值，也可以是数组元素的一个属性
    this.setData({
      id: 1
    })
  }
})
``` 
扩展：数据可以从网络获取，也可以是数组元素中的一个属性（写在页面循环里）。

参考文献：https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html

## 3. 使用 navigator 

在页面中使用：

``` 
<navigator url="page?id={{id}}" hover-class="navigator-hover">在当前页打开</navigator>
```

其中，=号前面的id是属性名称，{{id}}是要由小程序后端提供的参数值。

参考文献：https://mp.weixin.qq.com/debug/wxadoc/dev/component/navigator.html

在小程序后端JS中使用：

```
wx.navigateTo({
  url: 'test?id='+id
})
```

参考文献：https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject

## 4. 接受并处理不同参数值的响应

获取参数值之后，根据不同参数值进行不同的响应：

```
Page({
  onLoad: function(options) {
    this.setData({
      title: options.id // 这里取到了链接中的参数
    })
  }
})
```

后续操作则可以根据参数值来编程，例如：

```
wx.request({
  url: 'news.php', //仅为示例，并非真实的接口地址
  data: {
     id: options.id  // 把取到的id值传到服务器上
  },
  header: {
      'content-type': 'application/json' // 默认值
  },
  success: function(res) {
    console.log(res.data)
    // 服务器返回了动态内容，如
    that.setData({
      text: res.data.text // 这里取到了远程服务器根据不同的id返回的动态内容
    })
  }
})
```

## 5. 返回动态内容

在页面上显示动态内容：

```
{{text}}
```
