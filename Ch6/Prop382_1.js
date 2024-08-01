// Write react js script to perform the task as below using function component:
// •Create array of objects which have id, name & city of person.
// •Display id & name of persons having city name “Ahmedabad” by using map function.
// No need to write App.js file.


import Prop382_2 from "./Prop382_2"

function Prop382_1(){

    const arr=[{id:1,name:"abc",city:"ahmedabad"},{id:2,name:"def",city:"surat"},{id:3,name:"ghe",city:"ahmedabad"}]

    return(
        <Prop382_2 data={arr}></Prop382_2>
    )
}

export default Prop382_1;