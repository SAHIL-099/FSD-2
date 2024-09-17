// Write a node.js script to print 3 different JSON objects by specifying 
// corresponding object name on address bar.


const http = require("http");

const objects = {
    obj1: {name: "Object 1", desc:"This is object 1"},
    obj2: {name: "Object 2", desc:"This is object 2"},
    obj3: {name: "Object 3", desc:"This is object 3"}
}

http.createServer((req,res)=>{
   if (req.url=='/obj1')
   {
    res.writeHead(200,{'content-type':'text/html'})
    res.end(JSON.stringify(objects.obj1))
   }
   else if (req.url=='/obj2')
   {
    res.writeHead(200,{'content-type':'text/html'})
    res.end(JSON.stringify(objects.obj2))
   }
   else if(req.url=='/obj3')
   {
    res.writeHead(200,{'content-type':'text/html'})
    res.end(JSON.stringify(objects.obj3))
   }
   else{
    res.end("page not found")
   }
    
}).listen(4545)