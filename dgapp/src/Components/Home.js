import React, {useState} from "react";
import Task from './Task';

const Home=()=>{
   
    const [task, setTasks]=useState([]);
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");


const submitHandler=(e)=>{
    e.preventDefault();

    setTasks([...task, {title, description } ]);
}

const deleteTask=(index)=>{
    const filteredArr = task.filter((val, i) => {
        return i !== index;
    });
    setTasks(filteredArr);

}
   
    return(
        <div className="container">
             <h1>DAILY GOALS</h1>
            <form  onSubmit={submitHandler}>
                
            <input type="text" placeholder="Title" value={title} onChange={(e) =>
            setTitle(e.target.value)}></input>
            <textarea placeholder="Description"  value={description} onChange={(e) =>
            setDescription(e.target.value)}></textarea>

            <button type="submit">ADD</button>
            {task.map((item, index)=>(
                <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
            ))}
            </form>
           
        </div>
    );
}

export default Home;