import { useState } from "react";
import "./InputTask.css";

const InputTask = ({tasks, setTasks, counter, setCounter}) => {

    const [desc, setDesc] = useState("");

    const handleAdd = () => {
        setTasks([...tasks, {id: counter + 1, description: desc}]);
        setCounter(counter + 1);
        setDesc("");
    };

    const handleChange = (event) => {
        setDesc(event.target.value);
    };


    return(
        <div className="input_task">
            <input onChange={handleChange} placeholder="Introduce desc" value={desc} className="input_task__input" type="text"/>
            <button className="input_task__button" onClick={handleAdd}  disabled={!desc.trim()}>Añadir tarea</button>
        </div>
    );
};

export default InputTask;