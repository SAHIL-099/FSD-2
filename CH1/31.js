// Write a JS to store an array of objects having height and name. display name and 
// height of person with highest height. 

var person = [
    { name: "ap", height: 6.6 },
    { name: "dp", height: 6.3 },
    { name: "cp", height: 6.7 },
    { name: "np", height: 5 },
    { name: "tp", height: 4 }

]

var t = person[0] //assume first object  height is highest
console.log(t)
for (i = 0; i < person.length; i++) {
    if (person[i].height > t.height) {
        t = person[i]
    }
}

console.log("name:", t.name)
console.log("height:", t.height)