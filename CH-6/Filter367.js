// Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from the 
// array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]

function Filter369(){

  const  arr= [3,5,11,4,17,8,21,2,26,13,8]
  const newarr=arr.filter(n=>n>=10)

  return(
    newarr.map((d)=>{
        return  <h2>{d}</h2>
    })
  )
}

export default Filter369;