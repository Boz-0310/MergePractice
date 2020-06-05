/*window.onload=function(){
document.write("Hello JavaScript!");
};*/
$(document).ready(function(){
    $("input").click(function(){
//alert("Hi");
       // $("H1").text("Hello");
       let numberOfListItem=$("#choices li").length;
let randomchildNumber=Math.floor(Math.random()*numberOfListItem);
    $("#random-result").text($("#choices li").eq(randomchildNumber).text());
    $("#random-pic").attr("src", pic[randomchildNumber]);
    });
});