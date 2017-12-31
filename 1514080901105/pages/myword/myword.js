Page({
  data: {
    list: [
      {
        id: 'form',
        name: '北京',
        open: false,
        pages: ['button', 'list', 'input', 'slider', 'uploader']
      },
      {
        id: 'widget',
        name: '河北',
        open: false,
        pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
      },
      {
        id: 'feedback',
        name: '山东',
        open: false,
        pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
      },
      {
        id: 'nav',
        name: '辽宁',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'search',
        name: '黑龙江',
        open: false,
        pages: ['searchbar']
      },
      {
        id: 'aa',
        name: '吉林',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ab',
        name: '甘肃',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ac',
        name: '青海',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ad',
        name: '河南',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ae',
        name: '江苏',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'af',
        name: '湖北',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ag',
        name: '湖南',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ah',
        name: '江西',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ai',
        name: '浙江',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'aj',
        name: '广东',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ak',
        name: '云南',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'al',
        name: '福建',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'am',
        name: '台湾',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'an',
        name: '海南',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ao',
        name: '山西',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ap',
        name: '四川',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'aq',
        name: '陕西',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ar',
        name: '贵州',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'as',
        name: '安徽',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'at',
        name: '重庆',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'au',
        name: '上海',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'av',
        name: '天津',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'aw',
        name: '广西壮族自治区',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ax',
        name: '内蒙古',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ay',
        name: '西藏',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'az',
        name: '新疆维吾尔族自治区',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'ba',
        name: '宁夏回族自治区',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'bb',
        name: '澳门',
        open: false,
        pages: ['navbar', 'tabbar']
      },
      {
        id: 'bc',
        name: '香港',
        open: false,
        pages: ['navbar', 'tabbar']
      },
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
