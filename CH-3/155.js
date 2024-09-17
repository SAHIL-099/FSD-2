// How JSON processing is done in node js? Explain with suitable 
// example. 

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parse JSON string into a JavaScript object
const parsedData = JSON.parse(jsonString);

console.log(parsedData.name); // Output: John
console.log(parsedData.age);  // Output: 30
console.log(parsedData.city); // Output: New York

////////////////////////////////////////////////////////////////////////////
const data = {
    name: 'Alice',
    age: 25,
    city: 'Los Angeles'
};

// Convert JavaScript object to a JSON string
const js= JSON.stringify(data);

console.log(js); // Output: {"name":"Alice","age":25,"city":"Los Angeles"}