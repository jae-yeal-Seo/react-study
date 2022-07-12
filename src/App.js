import Header from  './components/Header'
import Tasks from './components/Tasks'
import React from 'react'

function App() {


  const [tasks,setTasks] = React.useState([
    {
        "id" : 1,
        "text" : "Doctors Appointment",
        "day" : "Fab 5th at 2:30pm",
        "reminder" : true,

    },
    {
        "id" : 2,
        "text" : "Meeting at school",
        "day" : "Fab 5th at 2:30pm",
        "reminder" : true,
    },
    {
        "id" : 3,
        "text" : "Take a test",
        "day" : "Fab 7th at 2:30pm",
        "reminder" : false,
    }
])

  const onDelete = (taskId) => {
    console.log(taskId)
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }

  const onRemind = (taskId) => {
    let newTasks = tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          reminder: !task.reminder,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="App">
     <h1>Hello From React</h1>
     <Header title="Hello"/>
     <Tasks tasks={tasks} onDelete={onDelete} onRemind={onRemind}/>
     <div>
     </div>
    </div>
  );
}

export default App;
