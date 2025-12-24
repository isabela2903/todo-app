import { useState, type FormEvent } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: todoItem,
        completed: false,
      },
    ]);

    event.currentTarget.reset();

    setFilter("all");
  };

  const toggleTodoCompleted = (id: number) => {
    const newTodoList = todoList.map((todo) => {
      if (id === todo.id) {
        const completed = !todo.completed;

        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodoList(newTodoList);
  };

  const completeAll = () => {
    const completedTodoList = todoList.map((todo) => {
      if (todo.completed === false) {
        const completed = !todo.completed;

        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodoList(completedTodoList);
  }

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.completed));
  };

  const deleteTodo = (id:number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }

  const deleteAll = () => {
    setTodoList([])
  }

  return {
    addTodo,
    toggleTodoCompleted,
    filteredTodos,
    clearCompleted,
    setFilter,
    filter,
    deleteTodo,
    deleteAll,
    completeAll,
  };
};
