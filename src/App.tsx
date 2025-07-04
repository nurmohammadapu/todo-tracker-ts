import './App.css'
import AddToDo from './components/AddToDo'
import Todos from './components/Todos';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar/>
      <AddToDo/>
      <Todos/>
    </div>
  )
}

export default App
