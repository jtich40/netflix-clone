import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import "./home.scss"

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            {/* set type to determine if tv shows or movies genre dropdown is rendered  */}
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}