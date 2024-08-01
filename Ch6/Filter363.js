// Write a ReactJS code in which we have apply filter to skip digit “3” from the array of 1 to 5 and 
// display all remaining digits of the array. 


function Filter363(){
  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = numbers.filter(number => number !== 3);


  return (
    filteredNumbers.map((n)=>{
        return <h2>{n}</h2>
    })
  )



}
export default Filter363;