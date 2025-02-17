import { createContext, useContext, useState } from "react"

// 1. Create a Context
// This has to be accessible from outside to get the context.
export const AuthContext = createContext()

// 2. Share the created context with other components.
// If any other class want to use AuthContext, can use via useAuth()
export const useAuth = () => useContext(AuthContext)

// All the components under the AuthProvider will be assgined to this variable `children`
export default function AuthProvider({ children }) {

    // 3. Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if (username === "test" && password === "1234") {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    // const valueToBeShared = { isAuthenticated, login, logout }
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
