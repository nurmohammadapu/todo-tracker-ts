import { useSearchParams } from "react-router-dom";
import { useTodos, type Todo } from "../store/todos";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  console.log("Todos:", todos);
  let filterData = todos;

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }
  return (
    <div>
      <ul>
        {filterData.map((todo: Todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />
              <label htmlFor="">{todo.task}</label>
              {todo.completed && (
                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
