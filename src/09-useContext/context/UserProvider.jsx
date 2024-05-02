import { useState } from "react"
import { UserContext } from "./UserContext"


// const user = {
//     id: 123,
//     name: 'Jose',
//     email: 'Jose@google.com'
// }


export const UserProvider = ({children}) => { // el children es el componente que se encuentra dentro del componente UserProvider
    
    const [user, setUser] = useState()
  
    

    return (
    <UserContext.Provider value={{user, setUser}}> {/* el value es el valor que se va a compartir en el context */}
        {children}
    </UserContext.Provider>
  )
}
