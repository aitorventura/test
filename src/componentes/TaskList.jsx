import Task from "./Task";
import "./TaskList.css";


const TaskList = ({tasks, setTasks}) => {
   const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

      return(
        <div className="task_list">
        {
            tasks.map((t) => 
                <div key={t.id}>
                <Task className="task_list__task" id={t.id} description={t.description}></Task>
                <button onClick={() => removeTask(t.id)}> Borrar </button>
                </div>
            )
        }
        </div>
    );
};

export default TaskList;
