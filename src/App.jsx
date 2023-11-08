import React, { useState } from 'react';
import './App.css';
import TodoForm from './componentes/todoForm'
import Todo from './componentes/todo';


function App() {
  const [todos, setTodos] = useState(
  [{
    id: 1,
    text: 'Estudar react',
    category: 'estudos',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Estudar css',
    category: 'estudos',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Estudar javascrip',
    category: 'estudos',
    isCompleted: false
  }
  ]);

  const AddTodo = (text, category) => {

    const newTodo = [...todos,{
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodo)
  }

  

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todos.id} todo={todo} />
        ))}
      </div>
      <TodoForm AddTodo={AddTodo} />
    </div>
  )
}

export default App
