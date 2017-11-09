var tempNum = 0;
Page({
  data: {
    students: [
      {
        sNum: "1122",
        name:'比尔盖茨'
      }, 
      {
        sNum: "1124",
        name:'扎克伯格'
      }, 
      {
        sNum: "1136", 
        name:'老王' 
      }, 
      {
        sNum: "1148", 
        name: '老李'
      }, 
      {
        sNum: "1155",
        name:'杨赵'
      },
      {
        sNum: "5155",
        name: '呵呵大'
      }
    ]
  },
  more: function (e) {
    console.log(e);
    tempNum++;
    var newGuy = { 
      sNum: "11" + tempNum,
      name: "神秘人" 
    };
    if (tempNum <= 35) {
      this.data.students.push(newGuy);
      this.setData({
        students: this.data.students,
      })
    } else {
      console.log("全员到齐！");
    }
  }

})