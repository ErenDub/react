import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import TodoUtil from './todoUtil'
function App() {
  const [todoArray, setTodoArray] = useState([])
  const [inputTitle, setInputTitle] = useState('')
  const [inputDesc, setInputDesc] = useState('')
  const addInArray = () => {
    todoArray.push({
      id: todoArray.length + 1,
      title: inputTitle,
      description: inputDesc,
    })
    localStorage['datas'] = JSON.stringify(todoArray)
    console.log(todoArray)
    setInputTitle('')
    setInputDesc('')
  }
  return (
    <div className="globalPadding">
      <div className="inputs">
        <input
          type="text"
          placeholder="სათაური"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="აღწერა"
          value={inputDesc}
          onChange={(e) => setInputDesc(e.target.value)}
        />
        <button onClick={() => addInArray()}>Add</button>
      </div>
      <div>
        {todoArray.map((e) => (
          <TodoUtil todoArray={e} key={e.id} />
        ))}
        {/* {JSON.parse(localStorage['datas'])} */}
      </div>
    </div>
  )
}

export default App
