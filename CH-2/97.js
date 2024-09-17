// Write node.js script to print “Welcome to Home Page” with two links containing 
// two pages named as “About Us” and “Contact Us” on home page of server. If user 
// request for About Us page it should display “Welcome to LJ University” in bold 
// font-style with blue color and if user request for Contact Us page it should display 
// “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if any other 
// request is requested it shows “Page not found” message in plaintext.


var http=require("http")
url=require("url")
server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'conetnt-type':'text/html'})
        res.write("Welcome to Home Page")
        res.end()
    }
    else if(req.url=="/about")
        {
            res.writeHead(200,{'conetnt-type':'text/html'})
            res.end("<p style='color:blue;font-style:bold'>welcome to lj university</p><br>")
           

        }

    else if (req.url=="/contact"){
            res.writeHead(200,{'conetnt-type':'text/html'})
            res.end("<p style='color:red;font-style:italic'>Email:abc@ljinstitutes.edu.in</p><br>")
        }
    else{
            res.writeHead(404,{'conetnt-type':'text/html'})
            res.end("<h1>page not found</h1>")
        }
}).listen(5050)


