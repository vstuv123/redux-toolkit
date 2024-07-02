import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <>
      <h3 className="mt-12 text-2xl font-bold">Todos</h3>
      {
        todos.map((todo) => (
          <li key={todo.id} className="mt-5 text-lg">
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className="text-white bg-red-500 border-0 py-1 px-4 focus: outline-none rounded text-md ml-10">X</button>
          </li>
        ))
      }
    </>
  )
}

export default Todos
