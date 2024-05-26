import "./Task.css";

const Task = ({id, description}) => {
    return(
        <div className="task">
            <h1 className="task__id">{id}</h1>
            <h2 className="task__description">{description}</h2>
        </div>
    );
};

export default Task;