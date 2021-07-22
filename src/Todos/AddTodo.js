import styles from './AddTodo.module.css';

import Card from "../UI/Card"
import Button from '../UI/Button';
import { useContext, useState } from 'react';
import ErrorModal from '../UI/Overlay/ErrorModal';
import { TodoContext } from '../Contexts/todos-context';
const AddTodo = () => {
  const todosCtx = useContext(TodoContext);
  const [enteredTodoItem, setEnteredTodoItem] = useState('');
  const [error, setError] = useState('');

  const addTodoItemHandler = (event) => {
    event.preventDefault();
    console.log('hihih')
    if (!enteredTodoItem) {
      setError({ title: 'Invalid Input', message: 'No Empty Value Please!' });
      return;
    }
    todosCtx.onAddTodoItem(enteredTodoItem);
    setEnteredTodoItem('');
  }

  const todoItemChangeHandler = event => {
    setEnteredTodoItem(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

    <Card className={styles.input}>
      <form onSubmit={addTodoItemHandler}>
        <label htmlFor="todoItem">Add Todo Item</label>
        <div>
          <input id="todoItem" type="text" value={enteredTodoItem} onChange={todoItemChangeHandler} />
          <Button type="submit">Add</Button>
        </div>

      </form>

    </Card>
  </>



}

export default AddTodo;