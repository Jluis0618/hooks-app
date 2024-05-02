import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  
  const {user } = useContext(UserContext);
  
  return (
    <>
    <h1>Home Page <small>{user?.name}</small></h1> {/* el ? es para que no de error si el user es undefined */}
    <hr />

    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>

</>
  )
}
