# 四斋蒸鹅心小程序

## 名称
 四斋蒸鹅心666（因为原名已经被使用，临时改名）

## 小程序二维码
提交审核未通过，原因如下<br  />
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/00.png?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/01.png?raw=true)

## 小程序创意说明
这个小程序是一个关于动漫咨询的小程序<br  />
主要的功能有动画的推荐；漫画相关的更新情况；一些关于动漫周边的新闻；<br  />
未完成的功能有：漫展以及具体信息；四斋文化的科普；相关游戏的推荐；（主要是信息问题）

## 小程序页面设计
### 首页
包括用户的部分信息以及关于本小程序的一些信息，和吐槽板的入口
<br  />
*介绍  使用了弹出框
 ```
 <view class="weui-cells weui-cells_after-title"bindtap='model1'>
      <view class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">作品介绍</view>
          <view class="weui-cell__ft weui-cell__ft_in-access">不存在的</view>
      </view>
    </view>
 ```
 js
 ```
 model1:function(){
    wx.showModal({
      title: '作品介绍',
      content: '利用在网页课里面学的知识写的小程序，做得比较渣，还有好多想弄的东西没弄出来。求轻喷',
    })
  }
   ```
### 动画推荐
由九宫格组成，点击相应会进入相应的分类列表<br  />
 ```
  <block wx:for="{{grids}}" wx:key="name">
                <navigator url="./comiclist?link={{item.link}}" class="weui-grid" hover-class="weui-grid_active">
                    <image class="weui-grid__icon" src="{{item.icon}}" />
                    <view class="weui-grid__label">{{item.name}}</view>
                </navigator>
            </block>
 ```
### 具体动画推荐列表界面
这是滚动界面，显示该类的动画推荐
```
  <navigator url="./comicshow?cast={{list.cast}}&title={{list.title}}&date={{list.date}}&desc={{list.desc}}&type={{list.type}}&company={{list.company}}&icon={{list.icon}}" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active">
            <view class="weui-media-box__hd weui-media-box__hd_in-appmsg">
                <image class="weui-media-box__thumb" src="{{list.icon}}" />
            </view>
            <view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
                <view class="weui-media-box__title">{{list.title}}</view>
                <view class="weui-media-box__desc">{{list.desc}}</view>
            </view>
        </navigator>   
```
###详情界面
显示具体的推荐详情
###漫画信息和动漫资讯
这2部分和上面的一样
## 小程序主要界面截图
### 主页
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/index.png?raw=true)

### 吐槽版
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/form.png?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/formshow.png?raw=true)

### 动画推荐
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/commic.png?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/commiclist.png?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/commicshow.png?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/commicshow2.png?raw=true)
### 漫画
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/manhua.png?raw=true)
### 动漫资讯
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/new.png?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/new2.jpg?raw=true)
![image](https://github.com/FFFfire666/myPicture/blob/master/lalala/newshow.jpg?raw=true)
