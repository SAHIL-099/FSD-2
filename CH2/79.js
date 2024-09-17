// Write a Node.Js program to sort an interger array, where all element are available 
// in a file separated by white space. Print sorted array elements on node.js server. 

var fs=require("fs");
fs.writeFileSync("79.txt","50 -1 99 100 20 0 56 78 59");
data=fs.readFileSync("79.txt","utf-8");
data=data.split(" ");
// d = data.sort((a,b)=>a-b);
// console.log(d); 

for(i in data){
    data[i] = parseInt(data[i])
}

for(i=0;i < data.length; i++){
    for(j=i; j < data.length;j++){
        if(data[i] > data[j]){
            temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        
    }
}
console.log(data)
