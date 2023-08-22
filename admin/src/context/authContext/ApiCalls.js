import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("auth/login", user)
        // only dispatch the loginSuccess action if the user is an admin
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}