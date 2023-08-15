import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            {/* set type to determine if tv shows or movies genre dropdown is rendered  */}
            <Featured type="movie"/>
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}