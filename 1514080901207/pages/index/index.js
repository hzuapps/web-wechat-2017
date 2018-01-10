//index.js
var scFile = require('../../utils/school-calendar.js')
var schoolCalendar = new scFile.SchoolCalendar();

//月份天数
var DAY_OF_MONTH = [
  [31,28,31,30,31,30,31,31,30,31,30,31],
  [31,29,31,30,31,30,31,31,30,31,30,31]
];

//判断当前年是否为闰年
var isLeapYear = function(year){
  if (year%400==0 || year%4==0 && year%100!=0)
    return 1
  else 
    return 0
};

//获取当月有多少天
var getDayCount = function(year,month){
  return DAY_OF_MONTH[isLeapYear(year)][month];
};


var pageData = {
  date: "",        //当前日期字符串
  styleshow:'显示所有月份',
  onehidden:'',
  twohidden: 'twohidden',
  //arr数据是与索引对应的数据信息
  arrIsShow: [],     //是否显示此日期
  isToday:[],        //是否是今天
  infoIsShow:[],     // 学校事件是否显示
  arrDays: [],       //关于几号的信息
  arrInfoEx: [],     //学校事件等扩展信息
  
  arrMonth:[],
  months:["二月","三月","四月","五月","六月","七月"],
  weekName:['周一','周二','周三','周四','周五','周六','周日'],
  weekNum:[],
  isEnd:[],
  arrIsShow2: [],     //是否显示此日期
  infoIsShow2:[],     // 学校事件是否显示
  arrDays2: [],       //关于几号的信息
  arrInfoEx2: [],     //学校事件等扩展信息
  numIsShow:[],       //周数是否显示
  febIsShow:[],       //二月是否显示
  febWIsShow:[],      //二月的周数是否显示
}


//刷新全部数据
var refreshPageData = function(year,month){
  pageData.date = year+'年' +(month+1)+'月';
  var offset = new Date(year,month,1).getDay();
  for( var i = 0; i<42; i++){
    var dayCount = getDayCount(year,month)
    pageData.arrIsShow[i] = i<offset || i>=dayCount+offset ? false:true;
    
    var today = new Date();
    if(year==today.getFullYear() && month==today.getMonth() && (i-offset+1) == today.getDate()){
       pageData.isToday[i] = 'isToday'
    }
    else{
       pageData.isToday[i] = ''
    }
    pageData.arrDays[i] = i-offset+1;
    var d = new Date(year,month,i-offset+1);//42个日期
    var dEx = schoolCalendar.school(d);
    if( dEx != null){
      pageData.arrInfoEx[i] = dEx;
      pageData.infoIsShow[i] = 'infoIsShow'; 
    }
    else{
      pageData.arrInfoEx[i] = '';
      pageData.infoIsShow[i] = '';
    }
  }
};

var refreshPageData2 = function(y,m){
      var offset2= new Date(y,m-1,1).getDay()-1,arrIsShow2=[],isEnd=[],arrDays2=[],arrInfoEx2=[],infoIsShow2=[],weekNum=[],numIsShow=[],febIsShow=[],febWIsShow=[],arrMonth=pageData.arrMonth,_arrMonth={};
      var dayCount2 = getDayCount(y,m-1);//当前月的天数
      if(new Date(y,m-1,dayCount2).getDay()!=0){
        var noffset = 7-new Date(y,m-1,dayCount2).getDay();//当前月后的空白格
      }
      else{
        var noffset = 0;
      }
      
      for( var i = 0; i<42; i++){
          var dayCount2 = getDayCount(y,m-1);
          arrIsShow2[i] = i<offset2 || i>=dayCount2+offset2 ? false:true;
          numIsShow[i] = i<offset2 || i>=dayCount2+offset2+noffset ? 'numNotShow':'numIsShow';
          if((i+1) %7==0||(i+2)%7==0){
            isEnd[i] = 'isEnd'
          }
          else{
            isEnd[i] = '';
          }
            arrDays2[i] = i-offset2+1;
          var d2 = new Date(y,m-1,i-offset2+1);//42个日期
          var dEx2 = schoolCalendar.school(d2);
          if( dEx2 != null){
            arrInfoEx2[i] = dEx2;
            infoIsShow2[i] = 'infoIsShow2'; 
          }
          else{
            arrInfoEx2[i] = '';
            infoIsShow2[i] = '';
          }
          if(m==2){
            febIsShow[i] = i<14?'febNotShow':'febIsShow';
            febWIsShow[i] = i <14?'febWNotShow':'febWIsShow';
          }
          switch(m)
    				{
              case 2: weekNum[i] = Math.floor((i-20)/7);break;
    					case 3: weekNum[i] = Math.floor((i+8)/7);break;
    					case 4: weekNum[i] = Math.floor((i+8+31)/7);break;
    					case 5: weekNum[i] = Math.floor((i+8+31+30)/7)+1;break;
    					case 6: weekNum[i] = Math.floor((i+8+31+30+31)/7);break;
    					case 7: weekNum[i] = Math.floor((i+8+31+30+31+30)/7);break;
    				}
          }
          

        _arrMonth.arrIsShow2=arrIsShow2;
        _arrMonth.isEnd=isEnd;
        _arrMonth.arrDays2=arrDays2;
        _arrMonth.arrInfoEx2=arrInfoEx2;
        _arrMonth.infoIsShow2=infoIsShow2;
        _arrMonth.weekNum=weekNum;
        _arrMonth.numIsShow = numIsShow;
        _arrMonth.febIsShow = febIsShow;
        _arrMonth.febWIsShow = febWIsShow;
        arrMonth.push(_arrMonth);
        pageData.arrMonth=arrMonth;
}

var curDate = new Date();
var curYear = curDate.getFullYear();
var curMonth = curDate.getMonth();
var curDay = curDate.getDate();
refreshPageData(curYear,curMonth);

for(let i=2;i<8;i++){
  refreshPageData2(2017,i);
}

Page({
  data: pageData,
  onLoad: function(options){

  },
    
   //回到今日
  goToday:function(e){
    var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth();
    var curDay = curDate.getDate();
    refreshPageData(curYear,curMonth,curDay); 
    this.setData(pageData);
  },

  goLastMonth:function(e){
    if(curMonth == 0){
      curYear--;
      curMonth = 11;
    }else{
      curMonth--;
    }
    refreshPageData(curYear,curMonth,curDay);
    this.setData(pageData);
  },

  goNextMonth:function(e){
    if(curMonth == 11){
      curYear++;
      curMonth = 0;
    }else{
      curMonth++;
    }
    refreshPageData(curYear,curMonth,curDay);
    this.setData(pageData);
  },
  
  //跳转
  bindDateChange:function(e){
    var arr = e.detail.value.split("-");
    refreshPageData(+arr[0],arr[1]-1,arr[2]-1);
    this.setData(pageData);
  },
  //改变显示方式
  changeStyle:function(){
    var styleshow = this.data.styleshow;
    var onehidden = this.data.onehidden;
    var twohidden = this.data.twohidden;
    if(styleshow == '显示所有月份'&& onehidden == ''&&twohidden == 'twohidden'){
      styleshow = '仅显示单日历';
      onehidden = 'onehidden';
      twohidden = ''
    }
    else{
      styleshow = '显示所有月份'
      onehidden = ''
      twohidden = 'twohidden'
    }
    this.setData({
      styleshow : styleshow,
      onehidden:onehidden,
      twohidden:twohidden
    })
  },
  //

})
