// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and branch(CSE,IT,CE) of students. 
// Apply filter to find students who are from CSE branch. And display name of all studens of CSE branch 
// using map function.

function Filter370() {
    const arr = [
      { name: "sahil", branch:"CE" },
      { name: "kz", branch: "CE" },
      { name: "vipul", branch: "IT" },
      { name: "ajay", branch: "CSE" },
      { name: "dhawal", branch: "cse" }
    ];
  
    return (
        arr.filter(b=>b.branch.toUpperCase()==='CSE').map(n=><h2>{n.name}</h2>)
    )
  }
  
  export default Filter370;