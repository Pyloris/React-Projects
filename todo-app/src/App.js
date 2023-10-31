import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  // store the todos in local storage
  useEffect(() => {
    const json = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }, [todos]);

  // handle the todo submits
  function submitTodo(e) {
    e.preventDefault();

    let todo = document.querySelector('input[type=text]').value;

    let new_todo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false
    };

    // store them in state
    if (todo.length > 0) {
      setTodos((prev) => prev.concat([new_todo]));
    }
    else {
      alert("Enter some text");
    }
  }

  // delete todo
  function deleteTodo(id) {
    let updatedTodo = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodo);
  }

  // toggle complete
  function completeTodo(id) {
    let updatedTodo = todos.map((todo) => {
      if (todo.id == id)
        todo.complete = !todo.complete;
      return todo;
    });
    setTodos(updatedTodo);
  }


  // submit edits
  function submitEdits(newtodo) {
    let updateTodo = todos.map((todo) => {
      if (todo.id === newtodo.id)
        todo.text = document.getElementById(newtodo.id).value;
      return todo;
    });
    setTodos(updateTodo);
    setTodoEditing(null);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>      
      <form onSubmit={submitTodo}>
        <input type="text" align="right" />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        <h3>To do List</h3>
        {
          todos.map((todo) => 
            <div key={todo.id}>
              {todo.id == todoEditing ? <input type="text" defaultValue={todo.text} id={todo.id}/> : !todo.complete ? todo.text : <s>{todo.text}</s>}
              <input type="checkbox" onClick={() => completeTodo(todo.id)}/>
              {todo.id != todoEditing ? <button onClick={() => setTodoEditing(todo.id)}>Edit</button> : <button onClick={() => submitEdits(todo)}>Submit</button>}
              <button onClick={() => deleteTodo(todo.id)}>Delete To DO</button>
            </div>)
        }
      </div>
    </div>
  );
}

export default App;
