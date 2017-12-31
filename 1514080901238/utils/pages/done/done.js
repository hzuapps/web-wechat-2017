const pageData = {

    data: {
        taskList: []
    },

    onShow: function () {
        let taskDone = wx.getStorageSync('taskList').filter((item) => {
            return item.done;
        });
        this.setData({
            taskList: taskDone
        });
    },

    toUndone: function (e) {
        let id = e.currentTarget.id;
        let taskList = wx.getStorageSync('taskList');
        let modify = taskList.map((item) => {
            return item.id == id ? Object.assign({}, item, { done: !item.done }) : item;
        });
        wx.setStorageSync('taskList', modify);

        let taskDone = modify.filter((item) => {
            return item.done;
        });
        this.setData({
            taskList: taskDone
        });
    },

    toRemove: function (e) {
        let id = e.currentTarget.id;
        let taskList = wx.getStorageSync('taskList');
        let taskLeft = taskList.filter((item) => {
            return item.id != id;
        });
        let modify = taskLeft.filter((item) => {
            return item.done;
        });
        this.setData({
            'taskList': modify
        });
        wx.setStorageSync('taskList', taskLeft);
    }
};

Page(pageData);