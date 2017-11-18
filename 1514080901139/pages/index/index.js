//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todoList: [{ text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }, { text: '打扫卫生', status: false }], // 待办数组 status表示是否完成 ，未完成为false，完成为true


    footerInputHidden: true, // 是否隐藏底部input
    inputValue: '',  // 初始化input
    isLower: false, // 页面是否到达底部
    isEnd: false // 是否还有更多数据
  },
  //事件处理函数
  // 添加待办按钮点击
  onAddButtonTap: function (e) {
    console.log(e)

    this.setData({
      footerInputHidden: false
    })

    console.log(this.data.footerInputHidden)
  },

  // 完成输入
  onFooterInputConfirm: function (e) {
    let todoList = this.data.todoList
    let text = e.detail.value
    let param = { text: text, status: false }

    if (param.text) {  // 如果有输入
      todoList.unshift(param)

      this.setData({
        todoList: todoList,
        footerInputHidden: true,
        inputValue: ''
      })

    }
  },

  // 完成圆圈点击
  onCircleTap: function (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index

    let param = {}
    let string = 'todoList[' + index + '].status'
    param[string] = !this.data.todoList[index].status

    this.setData(param)
  },

  // 页面滚动到最底部
  onscrollToLower: function () {
    // console.log('hahaha')
    let that = this

    if (!this.data.isEnd) {
      this.setData({
        isLower: true
      })

      // console.log(this.data.isLower)

      let todoList = this.data.todoList

      if (todoList.length < 30) { // 如果数组长度小于20则加载，用来模拟数据加载完毕的情况
        todoList.push({ text: '++++', status: false }, { text: '++++', status: false }, { text: '++++', status: false }, { text: '++++', status: false })
        console.log('hahaha')
        setTimeout(function () {
          that.setData({
            isLower: false,
            todoList: todoList
          })
        }, 1500)

      } else {
        setTimeout(function () {
          that.setData({
            isLower: false,
            isEnd: true
          })
        }, 1700)
      }
    }


  }
})
