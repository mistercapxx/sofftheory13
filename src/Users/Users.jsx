import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

// function Users() {
//   return (
//     <div>
//         <h2>This is Users Page</h2>
//         </div>
//   )
// }
const Users = () => {
  const [currentUser,setCurrentUser] = useState([]);
  return (
    <div>
      <h1> List of user go here ! </h1>
      <Outlet context={[currentUser]}/>
    </div>
  )
}


export default Users