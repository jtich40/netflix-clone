import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./navbar.scss"
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

export default function Navbar() {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext)

window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
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
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link>
                    <Link to="/tv-shows" className="link">
                        <span className="navbar-main-links">TV Shows</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span className="navbar-main-links">Movies</span>
                    </Link>
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
                            <span 
                            onClick={() => dispatch(logout())}
                            >
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}