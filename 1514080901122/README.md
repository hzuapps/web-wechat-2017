# 点名吧！老师

## 名称：

点名吧老师

## 二维码：

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/qrcode.jpg)

## 创新点：

这个小程序是一个和点名有关的小程序。目的是解决老师上课点名麻烦的需求。用了这个小程序，老师就可以不用一个个名字的去点，这样就可以节省上课时间还有避免了念错名字的尴尬。

1. 老师在上课的某一个时间点，登录小程序，创建一个“签到房间”，设置好学号范围（如1班1号到1班40号就可以设成101~140），然后设置点名的限定时间（例如想要在3分钟之内完成点名，就设3分钟）。
2. 学生登录小程序，然后查找到老师创建的那个点名房间的“房间号”，进入房间以后输入自己的学号（例如1班1号就输入101），点击“签到”按钮进行尝试签到。
3. 学生成功签到的条件：
	- 学生输入的学号不能超出老师所设置的学号范围
	- 学生签到的时间不能超出老师所设置的限定时间
	- 学生签到时，学生手机的距离和老师手机的距离不能大于50米

4. 签到时间结束后，显示签到结果。

## 小程序页面设计（各页面代码要点）

1. 创建房间页(create-room)：该页面用来创建房间。用户在此页输入签到学号范围和限定时间，当用户按下“创建房间”按钮时，会获取用户当前地理位置，还有会在本地会有表单验证（是否为空、学号范围填写是否正确等）。当表单检验无误后，会想服务器发射create-room事件，同时会跳转到当前房间页（now-room-teacher)

2. 签到页（check-in）：该页面用来签到。用户在此页输入签到房间和签到学号。当用户按下“签到”按钮后，会向服务器发射check-in事件，服务器监听到check-in事件后，判断这次签到是否成功，判断完后会返回结果给小程序，如果小程序接收到签到成功的信息，会跳转到当前房间页(now-room-student)

3. 房间创建者的当前房间页（now-room-teacher和now-room-student）：此页是房间创建者看到的当前房间页，显示了房间状态和签到剩余时间，当签到时间结束时，会向服务器发射time-out事件，然后还会监听服务器发射回来check-in-result事件并跳转到签到结果页。此外，还有一个“删除房间”按钮，点击“删除房间”按钮会向服务器发射delete-room事件，房间创建者可以点此按钮来中途删除房间

4. 客人的当前房间页（now-room-student）：显示了当前房间状态，此页也监听服务器发射回来check-in-result事件，当收到该事件时，会跳转到签到结果页。此外还有一个“退出房间”按钮，点击“退出房间”按钮会向服务器发射quit-room事件，房间客人可以点此按钮来退出房间，取消本次签到。

5. 签到结果页（check-in-result）：当签到结束时，小程序会跳转到这一页，用来显示签到结果（需到人数、实到人数、缺勤人员）。

## 小程序界面截图：

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/1.png)

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/2.png)

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/3.png)

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/4.png)

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/5.png)

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/6.png)

服务器截图

![1](https://github.com/AllenMinD/web-wechat-2017/blob/master/1514080901122/pic/7.png)
