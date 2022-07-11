import React from 'react'
import Task from './Task'



const Tasks = ({tasks}) => {



  return (
    <div>
        <ul>
        {tasks.map((task) => {
            return (
               <Task key={task.id} task={task}/>
            )  
        })}
        </ul>
    </div>
  )
}

export default Tasks