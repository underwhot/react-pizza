import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodosList } from '../redux/slices/todosSlice';
import { useState } from 'react';

// const todosList = ['firstTodo', 'secondTodo', 'lastTodo'];

export const Todos = () => {
  const [todoValue, setTodoValue] = useState('');
  const todosList = useSelector(selectTodosList);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(todoValue));
    setTodoValue('');
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          type="text"
        />
        <button type="sybmit">Add todo</button>
      </form>
      <ul>
        {todosList.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
};
