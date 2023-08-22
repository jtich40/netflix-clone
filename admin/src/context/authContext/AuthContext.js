import AuthReducer from "./AuthReducer"
import { createContext, useReducer } from "react"
// the initial state of the context
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}
// a context is created with the createContext() method
export const AuthContext = createContext(INITIAL_STATE)
// wrap the App component with the AuthContextProvider component to make the state available to all components
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

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
