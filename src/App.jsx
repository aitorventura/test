import InputTask from './componentes/InputTask'
import './App.css'
import TaskList from './componentes/TaskList';
import { useState } from 'react';

function App() {
  var initialTasks = [
    {
      id : "1",
      description : "tarea 1"
    },
    {
      id : "2",
      description : "tarea 1"
    }
  ]

  const [tasks, setTasks] = useState(initialTasks);
  const [counter, setCounter] = useState(2);

  return (
    <>
      <InputTask tasks={tasks} setTasks={setTasks} counter={counter} setCounter={setCounter}></InputTask>
      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </>
  )
}

export default App;
