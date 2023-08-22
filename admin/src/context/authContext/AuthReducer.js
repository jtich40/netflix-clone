const AuthReducer = (state, action) => {
    // the reducer function takes the state and an action as arguments
    switch (action.type) {
        // the reducer function returns a new state based on the action type
        case "LOGIN_START":
            return { 
                user: null,
                isFetching: true,
                error: false
            }
            case "LOGIN_SUCCESS":
                return { 
                    user: action.payload,
                    isFetching: false,
                    error: false
                }
                case "LOGIN_FAILURE":
                    return { 
                        user: null,
                        isFetching: false,
                        error: true
                    }
                    // the default case returns the state as is
                    default: 
                    return { ...state }
    }
}

export default AuthReducer;