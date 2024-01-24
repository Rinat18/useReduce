import React, { useContext, useEffect } from 'react'
import { todoContext } from '../context/TodoContextProvider'
import TodoItem from './TodoItem'

const TodoList = () => {
    const {get , user} = useContext(todoContext)
    useEffect(() => {
        get()
    },[])
  return (
    <div>
        {user.map((elem) => (
            <TodoItem key={elem.id} {...elem}/>
        ))}
    </div>
  )
}

export default TodoList
