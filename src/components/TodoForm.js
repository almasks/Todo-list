import React, { useState } from 'react'

function TodoForm({addTodo}) {
    const[todo,setTodo]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add item....'
         className='input-todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit" className='addtask-btn'>Add task</button>
    </form>
  )
}

export default TodoForm