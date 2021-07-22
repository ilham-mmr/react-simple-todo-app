import React, { useState, useEffect } from 'react'

export const TodoContext = React.createContext({
  onAddTodoItem: () => { },
  onDeleteTodoItem: () => { },
  onEditTodoItem: () => { },
  todoItems: [],
});


export const TodoContextProvider = (props) => {
  const initializeTodoItems = () => {
    const todoItems = localStorage.getItem('todoItems')
    const parsedTodoItems = JSON.parse(todoItems);
    if (parsedTodoItems) {
      return parsedTodoItems;
    }

    return [];
  }
  const [todoItems, setTodoItems] = useState(() => initializeTodoItems());

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems])

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
      return [...prevTodoItems,];
    })
  }

  return <TodoContext.Provider
    value={{
      onAddTodoItem: addTodoItemHandler,
      onDeleteTodoItem: deleteTodoItemHandler,
      onEditTodoItem: editTodoItemHandler,
      todoItems,
    }}>
    {props.children}
  </TodoContext.Provider>
}