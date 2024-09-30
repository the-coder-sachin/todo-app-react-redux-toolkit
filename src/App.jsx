import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './features/todoSlice'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  const addTodoHandle = ()=>{
    dispatch(addTodo(input))
    setInput('')
  }
  const removeTodoHandler = (id)=>{
    dispatch(removeTodo(id))
  }
  return (
    <>
      <div className="flex gap-2 p-4">
        <input
          className="bg-slate-900"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-green-500 px-2 py-1" onClick={addTodoHandle}>
          add
        </button>
      </div>

      <div className="flex flex-col p-4 gap-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between">
            <h1>list of todo{todo.text}</h1>
            <button className="bg-red-500 px-2 py-1 text-xs" onClick={()=>removeTodoHandler(todo.id)}>remove</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App
