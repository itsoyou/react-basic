import { createContext, useContext, useState } from "react"
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService"
import { HttpStatusCode } from "axios"
import { apiClient } from "../api/ApiClient"

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

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    // async function login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username+":"+password) //base64 encoding
    //     try {
    //         const response = await executeBasicAuthenticationService(baToken)
    //         // This is a Promise.
    //         // The next line will not wait this line to be finished.
    //         // To prevent this, we can make this function async and use await.
    //         if (response.status === HttpStatusCode.Ok) {
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             // adding the token to ApiClient, so that every request uses it.
    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log("intercepting and adding a token.")
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )
    //             return true
    //         } else {
    //             logout()
    //             return false
    //         }
    //     } catch (error) {
    //         logout()
    //         return false
    //     }
    // }

    async function login(username, password) {

        try {
            const response = await executeJwtAuthenticationService(username, password)
            if (response.status === HttpStatusCode.Ok) {
                const jwtToken = "Bearer " + response.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                // adding the token to ApiClient, so that every request uses it.
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log("intercepting and adding a token.")
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    // const valueToBeShared = { isAuthenticated, login, logout }
    return (
        <AuthContext.Provider value={{ isAuthenticated, username, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
