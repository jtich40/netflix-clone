import MovieReducer from "./MovieReducer"
import { createContext, useReducer } from "react"
// the initial state of the context
const INITIAL_STATE = {
    // the initial state user value is set to local storage if the user is logged in, otherwise null
    movies: [],
    isFetching: false,
    error: false
}
// a context is created with the createContext() method
export const MovieContext = createContext(INITIAL_STATE)
// wrap the App component with the MovieContextProvider component to make the state available to all components
export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)

    return (
        <MovieContext.Provider 
        value={{ 
            movies: state.movies, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
            {children}
        </MovieContext.Provider>
    )
}
