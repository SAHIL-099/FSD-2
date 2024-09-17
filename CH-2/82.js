// 2
// Write node.js script to print “Welcome Admin” on home page of server. If user 
// request for second page it display “This is second page” in italic font-style and if 
// any other request is requested it shows “Page not found” message.
var http = require("http")

http.createServer((req,res)=>{
    if(req.url ==('/home.html')){
        res.writeHead(200,{'content-type':"text/html"});
        res.write("Welcome Admin")
        res.end()
    }else if(req.url == "/second.html"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<p style='font-style: italic;'>This is second page</p>")
        res.end()
    }else{
        res.writeHead(404,{'content-type':"text/html"});
        res.write("Page Not Found")
        res.end()
    }
}).listen(3030)