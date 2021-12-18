// https://www.youtube.com/watch?v=EMk6nom1aS4&t=1838s&ab_channel=CarlosAzaustre-AprendeJavaScript
import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";

const KEY = "todoApp.todos";

export function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea ", completed: false },
  ]);
  const todoTaskRef = useRef(); // referencia para obtener el valor del input

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      // toma el estado anterior en el callback y con un spread le agregarmos la nueva tarea
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>Añadir</button>
      <button onClick={handleClearAll}>Eliminar🗑️</button>
      <div>
        Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>
    </Fragment>
  );
}
