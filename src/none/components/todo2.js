import Button from '@mui/material/Button';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function Todo2(props) {
  const { todo, updateTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div className='todo' key={props.id}>
      <h3>
        <Button>{props.id}</Button>
        <label
          className={props.completed ? 'completed' : null}
          onClick={props.handleUpdateClick}
        >
          {props.todo.todoname}
        </label>
        <lable onClick={props.handleUpdateClick}>
          &nbsp; &nbsp;&nbsp; <DeleteForeverOutlined />
        </lable>
      </h3>
    </div>
  );
}

export default Todo;
