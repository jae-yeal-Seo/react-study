import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete,onRemind}) => {

  const dummy = (taskId) => {
    onDelete(taskId)
  }

  const remind = (taskId) => {
    onRemind(taskId)
  }

  return (
    <div onClick={() => remind(task.id)} className={`task ${task.reminder && 'reminder'}`}>
        {/* 백틱내에 표현식을 사용하고 싶을때 ${}안에 사용 */}
    <h3>{task.text}<FaTimes onClick={() => dummy(task.id)} style={{ color:'red' }}/></h3>
    <p>{task.day}</p>
    </div>
  )
}

export default Task