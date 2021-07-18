import { useState } from 'react';
import AddTodo from './Todos/AddTodo';
import TodoItemsList from './Todos/TodoItemsList';
function App() {
    const [todoItems, setTodoItems] = useState([]);

    const addTodoItemHandler = (todoItem) => {
        setTodoItems(prevTodoItems => {
            return [...prevTodoItems, { id: Math.random(), todoItem }];
        })
    }

    const deleteTodoItemHandler = id => {
        setTodoItems(prevTodoItems => {
            return prevTodoItems.filter((todoItem) => todoItem.id !== id);
        })
    }

    const editTodoItemHandler = (id, updatedTodoItem) => {
        setTodoItems(prevTodoItems => {
            const idx = prevTodoItems.findIndex((todoItem) => todoItem.id === id);
            prevTodoItems[idx] = { id: Math.random(), todoItem: updatedTodoItem };
            console.log(prevTodoItems);
            return prevTodoItems;
        })
    }
    return <>
        <AddTodo onAddTodoItem={addTodoItemHandler} />
        <TodoItemsList todoItems={todoItems} onDeleteTodoItem={deleteTodoItemHandler} onEditTodoItem={editTodoItemHandler} />
    </>



}

export default App;
