import React from 'react'
import Unauthorized from './Unauthorized'

export default function HocComponent(ChildComponent,allowedRoles) {
  return function WithAuthWrapper(props){
    const user = JSON.parse(localStorage.getItem('user')) || {name:"Aditya", role:'admin'}
    if(!user || !allowedRoles.includes(user.role)){
      return <Unauthorized/>
    }
    return <ChildComponent {...props}/>
  }
}
