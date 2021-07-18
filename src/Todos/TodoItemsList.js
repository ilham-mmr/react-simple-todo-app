import Card from "../UI/Card";
import TodoItem from "./TodoItem";
import styles from "./TodoItemsList.module.css";

const TodoItemsList = props => {
    return <Card className={styles['todo-items']}>
        {props.todoItems.length > 0 ?
            <ul>
                {props.todoItems.map(todo => <TodoItem key={todo.id} id={todo.id} todoItem={todo.todoItem}
                    onDeleteTodoItem={props.onDeleteTodoItem} onEditTodoItem={props.onEditTodoItem}
                />)}
            </ul>
            :
            <p >No Todo. Add Now!</p>
        }
    </Card >
}

export default TodoItemsList;