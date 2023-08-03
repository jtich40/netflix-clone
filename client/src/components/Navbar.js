import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);

window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // prevents loop of setting state
    return () => window.onscroll = null;
}

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="Netflix Logo"
                    />
                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                    <span>Browse by Languages</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon" />
                    <span>Kids</span>
                    <NotificationsIcon className="icon" />
                    <img
                        className="avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Avatar"
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}