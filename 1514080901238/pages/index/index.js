const pageData = {
    data: {
        taskList: [],
        task: '',
        tipsHidden: true
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