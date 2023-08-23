const MovieReducer = (state, action) => {
    // the reducer function takes the state and an action as arguments
    switch (action.type) {
        // the reducer function returns a new state based on the action type
        case "GET_MOVIES_START":
            return { 
                movies: [],
                isFetching: true,
                error: false
            }
        case "GET_MOVIES_SUCCESS":
            return { 
                movies: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_MOVIES_FAILURE":
            return { 
                movies: [],
                isFetching: false,
                error: true
            }
            case "DELETE_MOVIE_START":
            return { 
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_MOVIE_SUCCESS":
            return { 
                // filter out the movie with the id that matches the payload to be deleted
                movies: state.movies.filter(movie => movie._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_MOVIE_FAILURE":
            return { 
                ...state,
                isFetching: false,
                error: true
            }
                    // the default case returns the state as is
                    default: 
                    return { ...state }
    }
}

export default MovieReducer;