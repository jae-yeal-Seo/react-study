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

  return (
    <div className="App">
     <h1>Hello From React</h1>
     <Header title="Hello"/>
     <Tasks tasks={tasks}/>
     <div>
     </div>
    </div>
  );
}

export default App;
