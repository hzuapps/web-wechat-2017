import DataService from  '../../datas/DataService';
import {LEVEL} from '../../datas/Config';
import {promiseHandle, log, formatNumber} from '../../utils/util';

Page({
  data: {
    showMonth: {},
    data: {},
    taskList:[{id:0,content:'今天是好朋友的生日',time:'2017年11月15日'},
    {id:1,content:'今天有重要会议要开',time:'2017年12月1日'},
      {id: 2, content: '今天出去参加同学聚会', time: '2017年12月3日'},
        {id: 3, content: '一年一度的家庭旅游', time: '2018年1月1日' },
          {id: 4, content: '今天是期末考试的第一天', time: '2018年1月20日' },
          { id: 5, content: '今天开始放寒假', time: '2018年1月25日' }
    ]
  }
})






