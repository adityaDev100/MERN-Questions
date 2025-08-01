import React, { useState } from 'react'

export default function UseToggle(initialValue = false) {
   
    const [value,setValue] = useState(initialValue)

    const setToggle =()=>{
        setValue((prev)=> !prev)
    }

    return [value,setToggle]
}
