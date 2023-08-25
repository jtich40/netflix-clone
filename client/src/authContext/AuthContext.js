import AuthReducer from "./AuthReducer"
import { createContext, useEffect, useReducer } from "react"
// the initial state of the context
const INITIAL_STATE = {
    // the initial state user value is set to local storage if the user is logged in, otherwise null
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}
// a context is created with the createContext() method
export const AuthContext = createContext(INITIAL_STATE)
// wrap the App component with the AuthContextProvider component to make the state available to all components
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    // save the user to local storage so that the user's logged-in status persists despite a page refresh
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider 
        value={{ 
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
