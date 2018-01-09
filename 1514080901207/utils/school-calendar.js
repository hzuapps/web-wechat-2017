var schoolevents = new Array(
    "20180101 元旦放假",
    "20180102 上课",
    "20180120 寒假开始",
    "20180305 开学",
    "20180115 考试",
    "20180119 考试",
    "20180306 上课",
    "20180402 清明放假",
    "20180403 清明放假",
    "20180404 清明放假",
    "20180429 五一放假",
    "20180430 五一放假",
    "20180501 五一放假",
    "20180528 端午放假",
    "20180529 端午放假",
    "20180530 端午放假",
    "20180617 四六级考试",
    "20180701 考试结束"  
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