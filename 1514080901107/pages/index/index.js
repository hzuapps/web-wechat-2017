Page({
    data: {
        list: [
            {
                id: 'form',
                name: '类型',
                open: false,
                pages: ['button']
            },
            {
              id: 'widget',
              name: '收藏夹',
              open: false,
              pages: ['绝地求生官方资讯', '绝地求生赛事']
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
