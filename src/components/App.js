
import React, { useState } from 'react';
import './../styles/App.css';



const App = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);
  // State to manage the input value
  const [todoInput, setTodoInput] = useState('');

  // Function to handle adding a new todo
  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {/* Input field for adding new todos */}
      <input
        type="text"
        placeholder="Enter your todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      {/* Button to add todo */}
      <button onClick={addTodo}>Add Todo</button>
      {/* List to display todos */}
      <ul>
        {/* Map over todos to display each todo */}
        {todos.map((todo, index) => (
          <li key={index}>
            {/* Display todo text */}
            {todo}
            {/* Button to remove todo */}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
