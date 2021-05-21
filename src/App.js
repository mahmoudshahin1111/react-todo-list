/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import Todos from './Todos';




function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState('');

  const onSubmit = (todo) => {
    if (todo === '') {
      return;
    }
    if (selectedTodoIndex !== '') {
      const newTodos = todos.map((_todo, index) => {
        if (index === selectedTodoIndex) {
          return todo;
        }
        return _todo;
      });
      setTodos(newTodos);
      setSelectedTodoIndex('');
    } else {
      setTodos(todos.concat(todo));
    }
  }
  const onEdit = (todoIndex) => {
    setSelectedTodoIndex(todoIndex);
  }
  const onDelete = (todoIndex) => {
    const filteredTodos = todos.filter((todo, index) => todoIndex !== index);
    setTodos(filteredTodos);
  }
  return (
    <div className="App">
      <TodoForm 
        editTodo={todos[selectedTodoIndex]} 
        onSubmit={(todo) => onSubmit(todo)} 
      />
      <Todos 
        todos={todos} 
        onEdit={(index) => onEdit(index)} 
        onDelete={(index) => onDelete(index)} />
    </div>
  );
}

export default App;
