import { useEffect, useState } from "react";
import "./App.css";

/*
App.css에서 추가
.completed {
  text-decoration: line-through;
}
*/

import Todo from "./components/todo1";
import Input from "./components/input1";

function App() {
  let boardList = [
    {
      id: 1,
      todoname: "운동하기",
      completed: false,
    },
    { id: 2, todoname: "SNS꾸미기", completed: false },
    {
      id: 3,
      todoname: "사진정리하기",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(todos);
  }, []);

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();

    setTodos([
      { id: todos.length + 1, todoname: input, completed: false },
      ...todos,
    ]);

    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Input
        handleInsertClick={insertTodo}
        input={input}
        handleChangeText={handleChangeText}
      />

      {todos
        ? todos.map((todo, idx) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleUpdateClick={() => updateTodo(todo.id)}
                handleDeleteClick={() => deleteTodo(todo.id)}
              />
            );
          })
        : null}
    </div>
  );
}

export default App;
