const ListReducer = (state, action) => {
    // the reducer function takes the state and an action as arguments
    switch (action.type) {
        // the reducer function returns a new state based on the action type
        case "GET_LISTS_START":
            return { 
                lists: [],
                isFetching: true,
                error: false
            }
        case "GET_LISTS_SUCCESS":
            return { 
                lists: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_LISTS_FAILURE":
            return { 
                lists: [],
                isFetching: false,
                error: true
            }
        case "CREATE_LIST_START":
            return { 
                ...state,
                isFetching: true,
                error: false
            }
        case "CREATE_LIST_SUCCESS":
            return { 
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_LIST_FAILURE":
            return { 
                ...state,
                isFetching: false,
                error: true
            }
        case "UPLOAD_LIST_START":
            return { 
                ...state,
                isFetching: true,
                error: false
            }
        case "UPLOAD_LIST_SUCCESS":
            return { 
                lists: state.lists.map(
                    list => list._id === action.payload._id && action.payload
                    ),
                isFetching: false,
                error: false
            }
        case "UPLOAD_LIST_FAILURE":
            return { 
                ...state,
                isFetching: false,
                error: true
            }
        case "DELETE_LIST_START":
            return { 
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_LIST_SUCCESS":
            return { 
                // filter out the movie with the id that matches the payload to be deleted
                lists: state.lists.filter(list => list._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_LIST_FAILURE":
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

export default ListReducer;