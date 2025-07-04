import { useState, type FormEvent } from "react"
import { useTodos } from "../store/todos";

const AddToDo = () => {

    const [todo,setTodo] = useState("");
    const {handleAddToDo} = useTodos();

    const setData = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={setData} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddToDo
