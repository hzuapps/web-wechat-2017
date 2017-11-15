const pageData = {
    data: {
        taskList: [],
        task: '',
        tipsHidden: true,
        tasklists:[{id:0,name:'做作业',time:'2017-10-11'},
          { id: 1, name: '下午兼职', time: '2017-10-11' },
          { id: 2, name: '做数学作业', time: '2017-10-11' },
          {id: 3, name: '做语文作业', time: '2017-10-11' },
          {id: 4, name: '做英语作业', time: '2017-10-11' },
          { id: 4, name: '4点与闺蜜逛街', time: '2017-10-11' },
          { id: 4, name: '19点陪爸妈吃完饭', time: '2017-10-11' }]
    },

    onShow: function () {
        this.setData({
            taskList: wx.getStorageSync('taskList') || []
        });
    },

    bindTask: function (e) {
        this.setData({
            task: e.detail.value
        });
    },

    toCreate: function () {
        let taskList = this.data.taskList;
        if (this.data.task.trim().length < 1) {
            this.toShowTips();
        } else {
            taskList.unshift({
                id: Date.now(),
                text: this.data.task,
                done: false
            });
            this.setData({
                task: '',
                taskList: taskList
            });
            wx.setStorageSync('taskList', taskList);
        }

    },

    toggleDone: function (e) {
        let id = e.currentTarget.id;
        let modify = this.data.taskList.map((item) => {
            return item.id == id ? Object.assign({}, item, { done: !item.done }) : item;
        });
        this.setData({
            'taskList': modify
        });
        wx.setStorageSync('taskList', modify);
    },

    toRemove: function (e) {
        let id = e.currentTarget.id;
        let modify = this.data.taskList.filter((item) => {
            return item.id != id;
        });
        this.setData({
            'taskList': modify
        });
        wx.setStorageSync('taskList', modify);
    },

    toHideTips: function () {
        this.setData({
            tipsHidden: true
        });
    },

    toShowTips: function () {
        this.setData({
            tipsHidden: false
        });
    }
};

Page(pageData);