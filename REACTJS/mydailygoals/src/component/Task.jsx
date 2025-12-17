import React from 'react'

const Task = ({ title, desc,deleteTask,index }) => {
  return (
    <div className='task'>
          <div>
        <p>{ title}</p>
        <span>{ desc}</span>
          </div>
      
      <button className='deleteButton' onClick={() => deleteTask(index)}>-</button>
    </div>
  )
}

export default Task
