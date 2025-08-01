import React from 'react'
import UseToggle from './UseToggle'

export default function UseToggleCustomHook() {
const [toggleValue, setToggle] = UseToggle(false)

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:toggleValue? "black":'white'}}>
      <label>Use Dark Mode</label>
      <input 
      type='checkbox'
      value={toggleValue}
      onChange={(e)=> setToggle(e.target.checked)}
      />
    </div>
  )
}

