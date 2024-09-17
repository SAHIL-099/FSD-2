// 3 Explain URL module with appropriate example


var u=require("url");
var addr="http://localhost:8080/default.html?year=2024&month=feb";
var q=u.parse(addr,true);
var qdata=q.query;
console.log(qdata.year);
if((qdata.year%4==0 &qdata.year%100!=0) ||qdata.year%400==0 ) 
{
console.log("Its a leap year")
}
