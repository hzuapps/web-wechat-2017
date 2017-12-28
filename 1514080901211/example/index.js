Page({
    data: {
        list: [
            {
                id: 'form',
                name: '考试倒计时',
                open: false,
                pages: ['navbar']
            },
            {
                id: 'widget',
                name: '每日签到',
                open: false,
                pages: ['navbar']
            },
            {
                id: 'feedback',
                name: '考试TIPS',
                open: false,
                pages: ['navbar']
            },
            {
                id: 'nav',
                name: '日常吐槽',
                open: false,
                pages: ['navbar']
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
