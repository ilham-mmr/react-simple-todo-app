import { TodoContextProvider } from './Contexts/todos-context';
import AddTodo from './Todos/AddTodo';
import TodoItemsList from './Todos/TodoItemsList';
function App() {


  return <TodoContextProvider>
    <AddTodo />
    <TodoItemsList />
  </TodoContextProvider>
}

export default App;
