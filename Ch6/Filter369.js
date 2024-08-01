// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and age of people. 
// Apply filter to find people with age less than 40. And display name of all people using map function. 

function Filter369() {
    const arr = [
      { name: "abc", age: 30 },
      { name: "def", age: 50 },
      { name: "fge", age: 20 },
      { name: "kkk", age: 25 },
      { name: "rrr", age: 40 }
    ];
  
    return (
      arr.filter(a => a.age < 40).map(n => <h2>{n.name}</h2>)
    );
  }
  
  export default Filter369;