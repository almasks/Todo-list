import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoWrapper() {
    const [toDos,setTodos]=useState([])
    const addTodo=(todo)=>{
        setTodos([...toDos,{id:new Date().getTime(),task:todo,completed:false,isEdit:false}])
        console.log(toDos)

    }
    const editTodo=()=>{
        
    }
    
  return (
    <div className='container'>
        <h1 className='mainHeading'> Get Things Done</h1>
        <TodoForm addTodo={addTodo}/>
        {toDos.map((todo,index)=>
            <Todo key={index} task={todo} editTodo={editTodo}/>)}
    </div>
  )
}

export default TodoWrapper