import React, { useEffect, useState } from 'react'

function useLocalStorage(key,initialValue){

    const [data,setData] = useState(()=>{
        try {
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : initialValue
        } catch (error) {
            console.log("can not get localStorage value",error)
            return initialValue
        }
      
    })

    const setValue =(value)=>{
       try {
        setData(value)
        localStorage.setItem(key,JSON.stringify(value))
       } catch (error) {
        console.error('Error setting localStorage:', error);
       }
    }
    

    return [data,setValue]
}

export default useLocalStorage

//// we can do it in this way also but its not a good practice
// import React, { useEffect, useState } from 'react'
// function useLocalStorage(key,initialValue){

//     const [value,setValue] = useState(()=>{
//         const data = localStorage.getItem(key)
//         return data ? JSON.parse(data) : initialValue
//     })

//     useEffect(() => {
//           localStorage.setItem(key,JSON.stringify(value))
//     }, [key,value])
    

//     return [value,setValue]
// }

// export default useLocalStorage
