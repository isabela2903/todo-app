import type { Todo } from "../../hooks/useTodo";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import IconCheck from "/images/icon-check.svg";

interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  filter: "all" | "active" | "completed";
  clearCompleted: () => void;
  deleteTodo: (id:number) => void;
}

const TodoList = ({
  todoList,
  toggleTodoCompleted,
  setFilter,
  filter,
  clearCompleted,
  deleteTodo
}: TodoListProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li
              key={todo.id}
              className={`group p-6 border-b ${themeConfig[theme].todo.borderColor}`}
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-5">
                  <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                    <button
                      className={`w-full h-full border ${
                        themeConfig[theme].todo.borderColor
                      } rounded-full cursor-pointer ${
                        themeConfig[theme].todo.backgroundColor
                      } ${
                        todo.completed
                          ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]"
                          : ""
                      }`}
                      onClick={() => toggleTodoCompleted(todo.id)}
                    >
                      {todo.completed && (
                        <img
                          src={IconCheck}
                          alt="Ícone de marcado"
                          className="h-2 w-2 m-auto"
                        />
                      )}
                    </button>
                  </span>

                  <p
                    className={`${themeConfig[theme].todo.textColor} ${
                      todo.completed ? "line-through opacity-50" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                </div>
                <button className="lg:hidden group-hover:block cursor-pointer hover:opacity-50" onClick={() => deleteTodo(todo.id)}>
                  <img
                    src="/images/icon-cross.svg"
                    alt="Botão para deletar tarefa"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}
        >
          <p>{todoList.length} items left</p>

          <div className="hidden sm:flex gap-4">
            <button
              className={`${
                filter === "all" ? "text-bright-blue" : ""
              } cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`${
                filter === "active" ? "text-bright-blue" : ""
              } cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`${
                filter === "completed" ? "text-bright-blue" : ""
              } cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          <button
            className={`cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
            onClick={() => clearCompleted()}
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div
        className={`flex justify-center gap-5 py-4 rounded-md ${themeConfig[theme].layout.textColor} ${themeConfig[theme].todo.backgroundColor} mt-4 sm:hidden`}
      >
        <button
          className={`${
            filter === "all" ? "text-bright-blue" : ""
          } cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active" ? "text-bright-blue" : ""
          } cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed" ? "text-bright-blue" : ""
          } cursor-pointer ${themeConfig[theme].layout.hoverColor}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
