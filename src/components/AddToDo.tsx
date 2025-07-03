import { useState, type FormEvent } from "react"

const AddToDo = () => {

    const [todo,setTodo] = useState("");

    const setData = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
