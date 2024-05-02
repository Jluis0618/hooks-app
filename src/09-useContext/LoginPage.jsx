import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext); // el useContext recibe un context como argumento y retorna el valor actual del context
  console.log(user)

  return (
    <>
        <h1>Login page</h1>
        <hr />

        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>

        <button 
        className='btn btn-primary'
        onClick={() => setUser({id: 123, name: 'Juan', email:'juan@google.com'})}>
          set user
        </button>
    </>
  )
}
