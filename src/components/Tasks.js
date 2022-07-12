import React from 'react'
import Task from './Task'


const Tasks = ({tasks,onDelete,onRemind}) => {

 

  return (
    <div>
        <ul>
        {tasks.map((task) => {
            return (
               <Task key={task.id} task={task} onDelete={onDelete} onRemind={onRemind}/>
            )  
        })}
        </ul>
    </div>
  )
}

export default Tasks