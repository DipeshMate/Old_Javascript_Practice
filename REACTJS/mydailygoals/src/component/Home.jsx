import React,{ useEffect, useState } from 'react';
import Task from './Task';



const Home=()=> {

    //const tasks = [];
    const [tasks, setTask] = useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]);
    const [title, setTitle] = useState(" ");
    const [desc, setDescription] = useState(" ");
  
    const submitHandler = (e) => {
        e.preventDefault();

        setTask([...tasks, {
            title,desc
        }])//... spread operator remove arroy and seperate individual
        setTitle("");
        setDescription("");
    }

    const deleteTask = (index) => {
        const filteredArray = tasks.filter((val, i) => (
            i !== index
        ))
setTask(filteredArray);
    }
    useEffect(() => {
        localStorage.setTask("tasks",JSON.stringify("tasks"))//in local storage string is save
    },[tasks])//

    return (
        <div className="container">
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                
                    <input type="text" placeholder="Title Here" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <textarea  placeholder="Description" value={desc} onChange={(e)=>setDescription(e.target.value)}></textarea>
                
                <button type='submit'>Add</button>
            </form>

            { tasks.map((item,index) => (
                <Task
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    index={index}
                    deleteTask={deleteTask}
                />
            )) }

        </div>
    )
}
export default Home