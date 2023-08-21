import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import "./watch.scss"

export default function Watch() {
    // useLocation hook to access location state movie data from ListItem component
    let { state } = useLocation()
    // access movie object if it exists in state
    const movie = state && state.movie

    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlinedIcon />
                    Home
                </div>
            </Link>
            <video 
            className="video" 
            autoPlay 
            progress 
            controls 
            src={movie.video}
            />
        </div>
    )
}