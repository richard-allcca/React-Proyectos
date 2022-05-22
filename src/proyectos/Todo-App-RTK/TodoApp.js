import React, { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from '../../redux/apis/todosApi';

const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  // customHooks de RTK Query
  const { data: todo } = useGetTodoByIdQuery(todoId)
  const { data: todos, isLoading } = useGetTodosQuery()

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>Todos - RTK Query </h1>
      <hr />

      <h4>isLoading:{isLoading ? 'True' : 'False'}-</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo} >
        Prev Todo
      </button>

      <button onClick={nextTodo}>
        Next Todo
      </button>

      <ul>
        {todos?.map(todo => (
          <li key={todo.id}>
            <strong> {todo.completed ? "DONE" : "PENDING"}</strong>
            {todo.title}
          </li>
        ))}
      </ul>

    </>
  )
}

export default TodoApp