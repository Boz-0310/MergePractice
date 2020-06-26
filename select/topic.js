let topicsArray=[
    "學潛水","增強程式","讀多益","衝浪","---","---","---","---","---","---"
    ]
    ;
    let startDate=new Date();
    
    function setMonthAndDay(startMonth,startDay){
    
    startDate.setMonth(startMonth,startDay);
    startDate.setHours(0)
    startDate.setMinutes(0);
    startDate.setSeconds(0)
    }
    setMonthAndDay(6,1);