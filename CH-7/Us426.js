
// Write a program to build React app for task todo list. 
// •	Add 1 input field and button and by clicking on button display entered task on the same page. 
// •	Also, add delete button with each added task to delete the task

import { useState } from "react";
function Us426(){
    const [Task,setTask]=useState("")
    const [todolist,setTodolist]=useState([])

    function handlechange(e){
        setTask(e.target.value);
    }

    function addTask(){
        const a=todolist.indexOf(Task);
        if(a<0){
            setTodolist([...todolist,Task])
        }
        else{
            alert("please enter valid taskname")
        }
    }


    function deleteTask(taskname){
        setTodolist(todolist.filter((t)=>{
            if(t!==taskname){
                return true;
            }
            else{
                return false;
            }
        }))
    }
    return(
        <>
        <h1>Todo list</h1>
        <input onChange={handlechange}/>
        <button onClick={addTask}>ADD</button>     
        {todolist.map((task)=>{
            return(
                <>
                <h2>{task}</h2>
                <button onClick={()=>{deleteTask(task)}}>Delete</button>
                </>
            )
        })}
        
        </>
    )
}

export default  Us426;