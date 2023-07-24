import React from 'react'

function Todo({task,editTodo}) {
  return (
    <div className='todo-display'>
        <p className='todo'>{task.task}</p>
            <i class="fa-regular fa-pen-to-square" onClick={editTodo}></i>
            <i class="fa fa-trash-o" aria-hidden="true" ></i>

        </div>
        
  )
}

export default Todo