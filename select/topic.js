let topicsArray=[
    "頂尖主廚大對決","歡樂又滿屋","拼出一個夢","你聽見了嗎?","美國犯罪末日","---","酷男的異想世界","---","----","紐約醫生日記"
    ]
    ;
    let startDate=new Date();
    
    function setMonthAndDay(startMonth,startDay){
    
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0)
    startDate.setMinutes(0);
    startDate.setSeconds(0)
    }
    setMonthAndDay(6,1);