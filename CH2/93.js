// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white space in .txt file.
// 2.append sorted array of these 5 elements in same file along with message : 
// “Sorted array:” in new line.
// 3.Find maximum number from that and append with message “maximum 
// number=” in same file

var fs=require("fs");
fs.writeFileSync("93.txt","50 -1 99 100 20 0 56 78 59");
data=fs.readFileSync("93.txt","utf-8");
data=data.split(" ");
d = data.sort((a,b)=>a-b);
fs.appendFileSync("93.txt","\n sorted array"+d) 
m=Math.max(...data)
fs.appendFileSync("93.txt","\n maximum number="+m)

