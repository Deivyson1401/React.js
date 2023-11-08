import React, { useState } from 'react';
import './App.css';
import TodoForm from './componentes/todoForm'
import Todo from './componentes/todo';


function App() {
  const [todos, setTdos] = useState(
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
  ])

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
