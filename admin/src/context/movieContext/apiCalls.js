import axios from "axios";
import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";
import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess } from "./MovieActions";
import { createMovieFailure, createMovieStart, createMovieSuccess } from "./MovieActions";

// get movies
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", { 
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            } 
        })
        dispatch(getMoviesSuccess(res.data))
    } catch (err) {
        dispatch(getMoviesFailure())
    }
}

// create movie
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart())
    try {
        const res = await axios.post("/movies", movie, { 
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            } 
        })
        dispatch(createMovieSuccess(res.data))
    } catch (err) {
        dispatch(createMovieFailure())
    }
}

// delete movie
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/" + id, { 
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            } 
        })
        dispatch(deleteMovieSuccess(id))
    } catch (err) {
        dispatch(deleteMovieFailure())
    }
}