import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss"

export default function Featured({ type }) {

    const [content, setContent] = useState({})
    // get random movie or tv show from backend
    useEffect(() => {
        const getRandomContent = async () => {
            try{
                // pass in type as query parameter to backend
                const res = await axios.get(`/movies/random?type=${type}`, {
                    // pass in token as header for authentication
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGVlODc0NjJmZDM0ZjMzYjU3ZGEzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjQ5NjM4OCwiZXhwIjoxNjkyOTI4Mzg4fQ.mnlAlaLHVJeBTCcDiznJMKm86Z5lkZFQtEz16QaJI4I"
                    }
                })
                setContent(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        getRandomContent()
    }, [type])

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.image} alt="Featured" />
            <div className="info">
                <img src={content.imageTitle} alt="Featured logo" />
                <span className="desc">{content.description}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}