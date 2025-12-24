import { TodoContainer } from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";


function App() {
  const {
    addTodo,
    filteredTodos,
    toggleTodoCompleted,
    clearCompleted,
    setFilter,
    filter,
    deleteTodo,
    deleteAll,
    completeAll,
  } = useTodo();

  return (
    <TodoContainer>
      <TodoHeader />

      <TodoForm addTodo={addTodo} />

      <TodoList
        todoList={filteredTodos}
        toggleTodoCompleted={toggleTodoCompleted}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
        deleteTodo={deleteTodo}
        deleteAll={deleteAll}
        completeAll={completeAll}
      />
    </TodoContainer>
  );
}

export default App;
