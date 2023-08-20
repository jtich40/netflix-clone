import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import "./home.scss"

export default function Home({ type }) {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    // handle user input changes for type and genre
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    // if type and/or genre, they are passed as query parameters to the backend
                    `/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                        // pass in token as header for authentication
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGVlODc0NjJmZDM0ZjMzYjU3ZGEzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjQ5NjM4OCwiZXhwIjoxNjkyOTI4Mzg4fQ.mnlAlaLHVJeBTCcDiznJMKm86Z5lkZFQtEz16QaJI4I"
                        }
                    }
                    )
                    setLists(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getRandomLists()
    }, [type, genre])


    return (
        <div className="home">
            <Navbar />
            {/* type is set according to type prop defined in App.jsx for each route */}
            <Featured type={type} />
            {lists.map(list => (
                <List list={list} />
            ))}
        </div>
    )
}