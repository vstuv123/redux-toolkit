
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <center>
      <h1 className="text-3xl font-bold">Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </center>
  )
}

export default App
