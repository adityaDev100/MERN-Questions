import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { counterContext } from './context/Context'
import Navbar from './component/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slices/counterslice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  return (
    <>
    <counterContext.Provider value={count}>
      <Navbar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <br />
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className="card">
        <input type='number' onChange={(e) => dispatch(incrementByAmount(Number(e.target.value)))}/>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App
