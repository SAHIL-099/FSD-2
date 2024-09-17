// Write a JSON object which contains array of 3 objects. Each object contains 2 
// properties name and age. Now, sort an array values by age in descending order. 
// Print name in terminal as per the sorted age.

var obj = [{ name: "abc", age: 18 }, { name: "def", age: 25 }, { name: "pqr", age: 17 }]

for (i = 0; i < obj.length; i++) {
    for (j = 0; j < obj.length; j++) {
        if (obj[i].age > obj[j].age) {
            var temp;
            temp = obj[i]
            obj[i] = obj[j]
            obj[j] = temp
        }
    }
}
for (i = 0; i < obj.length; i++)
    {
        console.log("name",obj[i].name)
        console.log("age",obj[i].age)
    }