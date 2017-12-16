# 点滴日记小程序

## 名称
### 瑾色双城（因为原点滴日记已经被使用，临时改名）

## 小程序二维码
提交审核未通过，因为日记不属于开放类别。
![image](https://github.com/879579620/MyResource/blob/master/diary/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%A0%81.jpg?raw=true)
![image](https://github.com/879579620/MyResource/blob/master/diary/%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF.png?raw=true)

## 小程序创意说明
这个小程序是一个记日记的小程序，随时随地，通过微信打开，即可轻松记录生活的点点滴滴，用完即走非常方便<br  />
主要的功能是编辑日记内容，显示以往的日记，查看日记详细内容以及记录所写日记的总数

## 小程序页面设计
### 首页
由一个编辑日记按钮，背景图片和个人头像名字等组成固定页面
### 我的信息
这个页面由日记统计，清除本地缓存，存在服务器的日记（暂时由存在服务器上的陪安东尼度过漫长岁月代替）组成<br  />
*  日记统计主要是从本地缓存取出存日记的inputs数据，然后再用一个变量count记录
 ```
 var inputs=wx.getStorageSync("inputs");
    var count=inputs.length;
    console.log(count)
    that.setData({
      count:count,
    })
 ```
* 清除本地缓存直接用wx.clearStorage("inputs")
 ```
qingkong:function(){
    wx.clearStorage("inputs")
    var that = this;

    var inputs = wx.getStorageSync("inputs");
    var count = inputs.length;
    console.log(count)
    that.setData({
      count: count,
    })
  }
 ```
### 编辑日记页面
由表单组成，然后提交之后会转到日记列表界面，提交的时候，会通过wx.setStorageSync(KEY,DATA)保存在本地缓存input数组里面<br  />
 ```
 var inputs =wx.getStorageSync("inputs")||[]
      inputs.unshift(input);
      wx.setStorageSync('inputs', inputs);
      wx.switchTab({
        url: '../show/show',
      })
 ```
### 日记列表界面
是滚动界面，显示所有的日记的部分信息，点击相应的日记，会转入对应的日记详细界面，显示日记详细内容,具体实现方法是
```
  <navigator url="../look/look?id={{index}}"></navigator>
```
## 小程序主要界面截图
### 主页
![image](https://github.com/879579620/MyResource/blob/master/diary/%E9%A6%96%E9%A1%B5.jpg?raw=true)

### 编辑页面
![image](https://github.com/879579620/MyResource/blob/master/diary/%E7%BC%96%E8%BE%91%E6%97%A5%E8%AE%B0%E7%95%8C%E9%9D%A2.png?raw=true)
![image](https://github.com/879579620/MyResource/blob/master/diary/%E7%BC%96%E8%BE%91%E6%97%A5%E8%AE%B0%E5%86%85%E5%AE%B9.png?raw=true)

### 日记列表
![image](https://github.com/879579620/MyResource/blob/master/diary/%E6%97%A5%E8%AE%B0%E5%88%97%E8%A1%A8.png?raw=true)
### 日记详细内容
![image](https://github.com/879579620/MyResource/blob/master/diary/%E6%97%A5%E8%AE%B0%E5%86%85%E5%AE%B9.png?raw=true)
### 我的信息页面
![image](https://github.com/879579620/MyResource/blob/master/diary/%E6%88%91%E7%9A%84%E4%BF%A1%E6%81%AF.png?raw=true)

### 陪安东尼度过漫长岁月 滚动页面
![image](https://github.com/879579620/MyResource/blob/master/diary/%E9%99%AA%E5%AE%89%E4%B8%9C%E5%B0%BC%E5%BA%A6%E8%BF%87%E6%BC%AB%E9%95%BF%E5%B2%81%E6%9C%88%20%E6%BB%9A%E5%8A%A8%E7%95%8C%E9%9D%A2.png?raw=true)
