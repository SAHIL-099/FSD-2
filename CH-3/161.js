// Write node js script to fetch values from url given below and display output as 
// asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be 
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data 
// in “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text

var u=require("url");
var fs=require("fs");
var h=require("http");
var adr1="https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";
var q=u.parse(adr1,true);
var p = q.pathname;
a = q.query.c1+"!\n"+q.query.c3+" "+q.query.c2+"\n"+q.hash;
fs.writeFileSync("."+p,a);
d = fs.readFileSync("exam.txt");

var server=h.createServer(
    function(req,res)
    {
        if(req.url=="/"){
    //res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1 style='color:red;'><pre>"+d+"</pre></h1>");
    res.end();
        }
        else{
            res.writeHead(404,{"content-type":"text/plain"});
            res.end("Page not Found");
        }
});
server.listen(5167);
