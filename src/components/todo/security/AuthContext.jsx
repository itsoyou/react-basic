/** 1. Create a Context
 *  2. Put some state in the context
 *  3. Share the created context with other components.
 *  */
import { createContext, useContext, useState } from "react"

export const AuthContext = createContext() // This has to be accessible from outside to get the context.

export const useAuth = () => useContext(AuthContext) // If any other class want to use AuthContext, can use via useAuth()


export default function AuthProvider({ children }) {
    // All the components under the AuthProvider will be assgined to this variable `children`

    // create some information to pass down
    // const [number, setNumber] = useState(10)

    // setInterval( // update the state in every second dynamically
    //     () => setNumber(number + 1),
    //     3000
    // )

    const [isAuthenticated, setAuthenticated] = useState(false)

    // const valueToBeShared = { isAuthenticated, setAuthenticated }
    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

