import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from '../error-boundery/Index'

function App() {
  const [count, setCount] = useState(0)

  const handleCountChange = ()=>{
    try {
      setCount((count) => a + 1)
    } catch (error) {
      throw new Error("error is : ",error)
    }
    
  }

  return (
    <>
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
        <button onClick={handleCountChange}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </>
  )
}

const virtual = <div>Hello</div>
const real = document.createElement('div')
real.innerText = 'hello'

console.log("first",virtual)
console.dir(real)



export default App
