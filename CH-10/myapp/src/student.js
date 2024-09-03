// Create a React form which accepts Name,Rollno and totalmarks,on submitting the form it should be 
// saved in data table inside MongoDB database named student. 
import { useState } from "react";
import axios from "axios";

function Student() {
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [totalmarks, setTotalmarks] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/form", { name, rollno, totalmarks });
            // Optionally reset the form fields or provide feedback to the user
            setName("");
            setRollno("");
            setTotalmarks("");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Roll Number:
                    <input
                        type="number"
                        name="rollno"
                        value={rollno}
                        onChange={(e) => setRollno(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Total Marks:
                    <input
                        type="number"
                        name="totalmarks"
                        value={totalmarks}
                        onChange={(e) => setTotalmarks(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Student;
