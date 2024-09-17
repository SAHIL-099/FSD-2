// Create an ReactJS app which shows the how to pass and read data using props
import Prop354_2 from "./Prop354_2";
function Prop354(){

    const student={"name":'sahil',"rollno":'21',"age":20}

    return (
        <>
        <Prop354_2 data={student}></Prop354_2>
        </>
    )
}

export default Prop354;