var schoolevents = new Array(
    "20180101 元旦放假",
    "20180102 上课",
    "20180115 考试",
    "20180119 考试结束",
    "20180120 寒假开始",
    "20180215 除夕",
    "20180216 过年",
    "20180305 开学",
    "20180404 清明放假",
    "20170429 五一放假",
    "20170430 五一放假",
    "20170501 五一放假",
    "20170528 端午放假",
    "20170529 端午放假",
    "20170530 端午放假",
    "20170617 四六级考试",
    "20170701 考试结束"  
);
var schoolTime = new Array();
var schoolEvent = new Array();

for( var i=0; i<schoolevents.length; i++){
    schoolTime.push(schoolevents[i].split(" ")[0]);
    schoolEvent.push(schoolevents[i].split(" ")[1]);
}



function SchoolCalendar(){
    this.school = function(date){
        
        var year = date.getFullYear(), 
            month = date.getMonth()+1,
            day = date.getDate();

        if(month<10){
            month = "0" + month
        }
        if(day<10){
            day = "0" + day
        }


        for(let i=0; i<schoolTime.length; i++){
            if(schoolTime[i] === year+month+day)
                return schoolEvent[i]
            else
                continue
        }
    }
    
}




module.exports = {
    SchoolCalendar: SchoolCalendar
}