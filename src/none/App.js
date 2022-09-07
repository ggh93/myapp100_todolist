import { useEffect, useState } from 'react';
import './App.css';
import Input from 'components/input1';
import Todo from 'components/todo1';
/**
 *  App.css 추가
 *  .completed {
 *    text-decoration: line-through;
 *  }
 */

function App() {
  let boardList = [
    {
      id: 1,
      todoname: '운동하기',
      completed: false,
    },
    {
      id: 2,
      todoname: 'SNS꾸미기',
      completed: false,
    },
    {
      id: 3,
      todoname: '사진정리하기',
      completed: false,
    },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState(['']);

  // useEffect = {};

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault(); // 이벤트 종료
    setTodos([
      { id: todos.length + 1, todoname: input, completed: false },
      ...todos,
    ]);
    setInput('');
  };

  function updateTodo(id) {
    setTodos(todos.map((todo) => (todo.id === id ? todo.id : todo)));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <Input
        input={input}
        handleInsertClick={insertTodo}
        handleChangeText={handleChangeText}
      />

      {todos &&
        todos.map((todo, idx) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleUpdateClick={() => updateTodo(todo.id)}
              handleDeleteClick={() => deleteTodo(todo.id)}
            />
          );
        })}
    </div>
  );
}

export default App;
