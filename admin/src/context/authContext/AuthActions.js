// actions for authContext
export const loginStart = () => ({
    type: "LOGIN_START",
})

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
})

// logout action
export const logout = () => ({
    type: "LOGOUT",
})