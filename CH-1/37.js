// Below JSON object a is given. Print below sentence in console from the given 
// object.
// Hi ! We are students of LJU . 
// Exam - FSD2 
// const a = { 
//  "A" : "LJU",
//  "B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],
//  "C" : [ {
//  "D" : "Hi",
//  "E" : ['are', 4, {'F' : ['semester', 'We']} ]
//  }],
//  "G" : {"H" : "students", "I" : ["of","!"] },
//  "J" : [{"K" :".", "L":"-"},"FSD-2"] 
//  }


obj = {
    "A": "LJU",
    "B": ["CSE","IT","CE"],
    "C": [
        {
            "D":"Hi",
            "E":["are",4,{F:["semester","we"]}],
        }
    ],
    "G":{
        H:"Students",
        I: ["of","!"]
    },
    "J":[
        {
            "k":".",
            "l": "-"
    },"FSD-2"
    ]
}

console.log(obj.C[0].D +" "+obj.G.I[1]+" " +obj.C[0].E[2].F[1]+" "+obj.C[0].E[0] +" "+obj.G.H +" "+obj.G.I[0] +" "+obj.A+" "+obj.J[0].k)