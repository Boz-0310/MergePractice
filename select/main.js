$(document).ready(function(){
    setTable();
 
    //如果有人來設定日期
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-");
        console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
 
});
 
function setTable(){
    $("#courseTable").empty();
 
    //一次產生固定標題列
    $("#courseTable").append(
        "<tr><th>項目</th><th></th><th>事項</th></tr>"
    );
    //反覆產生資料列
 //   let topicCount = topicsArray.length;
    let topicCount = 10;
    //計算一天有多少毫秒
    let oneDayMilliseconds = 24*60*60*1000;
 
    for(let x=0; x<10; x++){
        let thisDate = new Date(startDate.getTime()+1*x*oneDayMilliseconds);
        let trSpecial = "<tr>";
        if(topicsArray[x]=="不上課"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }
        $("#courseTable").append(
            trSpecial +
            "<td>"+ (x+1) +"</td>"+
          
            "<td>" +"</td>"+
            "<td>" + topicsArray[x]+"</td>"+
            "</tr>"
        ); //每一列有場次、預計日期、主題
    }
}
