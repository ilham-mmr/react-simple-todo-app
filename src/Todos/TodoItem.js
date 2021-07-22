import { useContext, useState } from "react";
import { TodoContext } from "../Contexts/todos-context";

import Button from "../UI/Button";
import styles from "./TodoItem.module.css";

const TodoItem = props => {
  const todosCtx = useContext(TodoContext);

  const initialTodoItem = props.todoItem;
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(initialTodoItem);
  const deleteThisTodoItemHandler = () => {
    todosCtx.onDeleteTodoItem(props.id);
  }

  const editThisTodoItemHandler = () => {
    setIsEdit(prevValue => (!prevValue));
    console.log(isEdit);

    if (isEdit && (initialTodoItem !== input)) {
      todosCtx.onEditTodoItem(props.id, input);
    }
  }

  const editInputChangeHandler = (event) => {
    setInput(event.target.value);
  }


  return <li className={styles['todo-item']}>
    {isEdit ? <input className={styles['edit-input']} type="text" value={input} onChange={editInputChangeHandler} /> : <p>{input}</p>}
    <div>
      <Button onClick={editThisTodoItemHandler}>edit</Button>
      <Button onClick={deleteThisTodoItemHandler}>delete</Button>
    </div>
  </li>
}

export default TodoItem;