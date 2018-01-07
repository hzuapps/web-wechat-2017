# PS滤镜模拟

## 小程序名：
PS滤镜模拟练习（因为最初设想的功能，有一些核心部分小程序并不支持，所以更改程序的侧重点，名字也一起改了）


## 二维码：
![小程序二维码](http://m.qpic.cn/psb?/V13Rne3b1dHYr6/L7QI*ge86rbxKy1VokfRbs0ikwbohIu8e*Cnvj3M2sI!/b/dPQAAAAAAAAA&bo=gALZAgAAAAARB2k!&rf=viewer_4)

## 创意来源
因为手机自带的风格化滤镜不好用，就想着自己做一个。我先在别的平台搭建了一个将图片转成素描风格滤镜，和手机自带的滤镜做出来的效果相比，确实要好上一些。于是就决定在小程序这边把其他滤镜效果做完。

## 小程序页面说明
小程序用于搭配PS中各种滤镜的组合。在设置中也模仿PS的界面，所以只需要一个界面，多张图片的话使用不同的图层表示，通过选择图层可以对该图层进行滤镜、颜色混合的修改，各个选项的参数设置通过每个选项下方的slider进行设置

## 小程序截图
### 初始界面
![初始界面](http://m.qpic.cn/psb?/V13Rne3b1dHYr6/THa1wTyggrYKwD5ms*u53AMz9UUmIxBVdFJNi9yOcW4!/b/dPQAAAAAAAAA&bo=SwEzAgAAAAARB0s!&rf=viewer_4)
### 运行界面
不处理的效果图
![初始界面](http://m.qpic.cn/psb?/V13Rne3b1dHYr6/Oyv.8X0KYQReTFM1hrfOYT7XZy*mRQm0DGcnGubdJnM!/b/dG0BAAAAAAAA&bo=SAEqAgAAAAARF0E!&rf=viewer_4)

简单调节后的结果图
![运行界面](http://m.qpic.cn/psb?/V13Rne3b1dHYr6/9ctgtL7XFp7IE1n2eYTK1.qGyBUfd.bX.wIVvP1A1YM!/b/dPQAAAAAAAAA&bo=SAEwAgAAAAARF1s!&rf=viewer_4)

## 感想
课程的话还是比较简单，虽然之前没接触过网页开发，但XML作为一种标记语言还是比较简单易学的，短时间内学会用来搭建一个差不多的界面还是比较轻松，而javascript的话，因为之前把它当作脚本语言用过一小段时间，使用起来也不那么陌生。当然，这样导致我对于网页的架构了解地不到位，虽然最终，小程序是做出来了，但对于它内部怎么运行还是没什么底气，更像是初学编程那样，做了一些功能的堆砌，写出来的东西远谈不上优雅。对于小程序，接触下来其实不太喜欢这个平台，感觉限制太多了，很多东西都没有提供，而有没有二进制打开的函数，致使很多功能都只能搬到后台来做，对于没有服务器的人来说不太友好，这也是我删除了原本一些核心功能的原因。
