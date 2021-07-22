import { useContext } from "react";
import { TodoContext } from "../Contexts/todos-context";
import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import styles from "./TodoItemsList.module.css";

const TodoItemsList = () => {
  const todosCtx = useContext(TodoContext);

  return <Card className={styles['todo-items']}>
    {todosCtx.todoItems.length > 0 ?
      <ul>
        {todosCtx.todoItems.map(todo => <TodoItem key={todo.id} id={todo.id} todoItem={todo.todoItem} />)}
      </ul>
      :
      <p >No Todo. Add Now!</p>
    }
  </Card >
}

export default TodoItemsList;