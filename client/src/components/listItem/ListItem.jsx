import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import "./listItem.scss"

export default function ListItem({ index, item }) {

    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})

    // get movie data from backend
    useEffect(() => {
        const getMovie = async () => {
            try {
                // pass in item as parameter to get each movie
                const res = await axios.get("/movies/find/" + item, {
                    // pass in token as header for authentication
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGVlODc0NjJmZDM0ZjMzYjU3ZGEzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjQ5NjM4OCwiZXhwIjoxNjkyOTI4Mzg4fQ.mnlAlaLHVJeBTCcDiznJMKm86Z5lkZFQtEz16QaJI4I"
                    }
                })
                setMovie(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMovie()
    }, [item])

    console.log(movie)
    return (
        // pass in movie as state to Watch component to access movie data
        <Link to={{ pathname: "/watch" }} state={{ movie: movie }} >
            <div className="list-item" 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <img src={movie.image} alt="" />
                {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="item-info">
                        <div className="list-icons">
                            <PlayArrowIcon className="info-icon" />
                            <AddIcon className="info-icon" />
                            <ThumbUpOutlinedIcon className="info-icon" />
                            <ThumbDownOutlinedIcon className="info-icon" />
                        </div>
                        <div className="item-info-top">
                            <span>{movie.duration}</span>
                            <span className="limit">{movie.ageLimit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="info-description">{movie.description}</div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
            </div>
        </Link>
    )
}