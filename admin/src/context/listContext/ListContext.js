import ListReducer from "./ListReducer"
import { createContext, useReducer } from "react"
// the initial state of the context
const INITIAL_STATE = {
    // the initial state user value is set to local storage if the user is logged in, otherwise null
    lists: [],
    isFetching: false,
    error: false
}
// a context is created with the createContext() method
export const ListContext = createContext(INITIAL_STATE)
// wrap the App component with the MovieContextProvider component to make the state available to all components
export const ListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE)

    return (
        <ListContext.Provider 
        value={{ 
            lists: state.lists, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
            {children}
        </ListContext.Provider>
    )
}
