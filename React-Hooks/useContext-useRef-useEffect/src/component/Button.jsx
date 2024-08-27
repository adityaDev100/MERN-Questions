import React,{useContext} from 'react'
import { counterContext } from '../context/Context'
import { useSelector } from 'react-redux'


function Button() {
    const reduxCount = useSelector((state)=> state.counter)
    const count = useContext(counterContext)

    /// Difference between context API and redux is that , in context api our we wrapped components that will re-render
    ///every time whenever state passed in context provider will be changed. so when count value is changes , all components tree 
    ///will re-render. for example navbar will re-render . in redux we can get rid of these extra re-render
  return (
    <div>Button:{reduxCount.value} {count}</div>
  )
}

export default Button