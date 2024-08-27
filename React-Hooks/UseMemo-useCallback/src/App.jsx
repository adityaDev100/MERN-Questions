import { useCallback, useMemo, useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(3)


  ///USE MEMO EXPLANATION

  // now suppose we have a function that generate a otp for us 
  // if we pass getOtp function to child component then whenever child component rerender due to count state changes, then this getOtp function will return a new otp every time ,

      const getOtp = ()=>{
         return (Math.random()*10000).toFixed(0)
      }

  //if we want to memoize our otp then to solve this problem we can use useMemo hook 
  // "use memo hook is a function that return a memoized value of a callback function that is called inside it.with dependency array"

      const memoizedOtp = useMemo(getOtp,[])


  ///USE CALLBACK EXPLANATION


  //if we pass getOtp function in our child component then when count is changing then it should be re rendered but when count2
  //is changing then child component should not be rendered because child component is inside React.memo(), but cause js can not recognize that 
  // getOtp function is same , so it recreate this function for child component.


      const memoizedOtpFunc = useCallback(getOtp,[])

  // by using useCallback we can store memoized version of this callback function , by doing this if we pass this memoized function in child component it will only render when dependency array changed 
  //or other props changed in child component



  let person = {
    name : "Aditya Pandey",
    isAdmin: true
  }

  // now if we want to pass this object in child component ,but js can not compare two objects are same or not, so with same
  // object child component will re-render.
  //but its not good so we can memoize this value also but as a callback function 

  const memoizedPerson = useMemo(()=> person,[])

  // now it will memoize person value cause its returned by callback function that we are passing in useMemo



  //to understand useCallback suppose we have a function 

  const fun = ()=>{
    return "hello"
  }

  useEffect(() => {
    console.log("function changed")
  }, [fun])

  // while its a same function without any dependency , but still every time when component re-render due to state changes , then 
  // console.log("function changed") this line is called , that proves that react recreate function it its memory on every new render.
  

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count) => count + 2)}>
          count2 is {count2}
        </button>
      </div>
      <Child count={count} memoizedOtp={memoizedOtp} memoizedOtpFunc={memoizedOtpFunc} person={memoizedPerson}/>
    </>
  )
}

export default App
