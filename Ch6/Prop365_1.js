// Create React app to pass student name, roll number, t1 marks and t2 marks of 2 students to component 
// and read the information and display in table format. Use Props. 

import Prop365_2 from "./Prop365_2";
function Prop365_1(){

   const arr=[{name:"abc",rollno:1,t1:22,t2:23},{name:"def",rollno:2,t1:24,t2:25}];

    return(
        <>
        <table border={2}>
            <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>T1 Marks</th>
            <th>T2 Marks</th>
            </tr>

            <Prop365_2 data={arr[0]}></Prop365_2>
            <Prop365_2 data={arr[1]}></Prop365_2>
        </table>

        </>
    )

}

export default Prop365_1;