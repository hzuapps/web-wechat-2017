//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todoList: [{text: '打扫卫生', status: false}, {text: '打扫卫生', status: false}, {text: '打扫卫生', status: false}, {text: '打扫卫生', status: false}], // 待办数组 status表示是否完成 ，未完成为false，完成为true
    footerInputHidden: true, // 是否隐藏底部input
    inputValue: '' // TODO input输入之后会修改input的value属性，暂时先每次将它初始化为空，待修改
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
    let param = {text: text, status: false} 

    if (param.text) {  // 如果有输入
      todoList.push(param)

      this.setData({
        todoList: todoList,
        footerInputHidden: true,
        inputValue: ''
      })
      
    }
  },

  // 完成圆圈点击
  onCircleTap: function (e){
    console.log(e)
    let index = e.currentTarget.dataset.index

    let param = {}
    let string = 'todoList[' + index + '].status'
    param[string] = !this.data.todoList[index].status

    this.setData(param)
  }
})
