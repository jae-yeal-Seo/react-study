import React from 'react'

const Task = ({task}) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`}>
        {/* 백틱내에 표현식을 사용하고 싶을때 ${}안에 사용 */}
    <h3>{task.text}</h3>
    <p>{task.day}</p>
    </div>
  )
}

export default Task