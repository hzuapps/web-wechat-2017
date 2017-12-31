const pageData = {

    data: {
        taskList: []
    },

    onShow: function () {
        let taskUndone = wx.getStorageSync('taskList').filter((item) => {
            return !item.done;
        });
        this.setData({
            taskList: taskUndone
        });
    },

    toDone: function (e) {
        let id = e.currentTarget.id;
        let taskList = wx.getStorageSync('taskList');
        let modify = taskList.map((item) => {
            return item.id == id ? Object.assign({}, item, { done: !item.done }) : item;
        });
        wx.setStorageSync('taskList', modify);

        let taskUndone = modify.filter((item) => {
            return !item.done;
        });
        this.setData({
            taskList: taskUndone
        });
    },

    toRemove: function (e) {
        let id = e.currentTarget.id;
        let taskList = wx.getStorageSync('taskList');
        let taskLeft = taskList.filter((item) => {
            return item.id != id;
        });
        let modify = taskLeft.filter((item) => {
            return !item.done;
        });
        this.setData({
            'taskList': modify
        });
        wx.setStorageSync('taskList', taskLeft);
    }
};

Page(pageData);