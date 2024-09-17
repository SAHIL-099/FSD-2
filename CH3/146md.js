// Write a node.js script to create calculator using external module having a function 
// add(), sub(), mul(), div(). This function returns result of calculation. Write all 
// necessary .js files.



const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}

const mul=(a,b)=>{
    return a*b;
}
const  div=(a,b)=>{
    return a/b;
}

module.exports={add,sub,mul,div}