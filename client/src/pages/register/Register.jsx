import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./register.scss"

export default function Register() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [username, setUsername] = useState("")

const navigate = useNavigate()

const emailRef = useRef()
const passwordRef = useRef()
const usernameRef = useRef()

const handleClick = (e) => {
    navigate("/login")
}

const handleStart = () => {
    // set email to value from input field
    setEmail(emailRef.current.value)
}

const handleFinish = async (e) => {
    e.preventDefault()
    // set password and username to values from input fields
    setPassword(passwordRef.current.value)
    setUsername(usernameRef.current.value)
    try {
        await axios.post("auth/register", { email, username, password })
        navigate("/login")
    } catch (err) {}
}

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img 
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="Netflix logo" 
                    />
                    <button 
                    className="login-btn" 
                    onClick={handleClick}
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {/* conditionally render email and password signup */}
                {!email ? (
                    <div className="input">
                        <input 
                        type="email" 
                        placeholder="Email address" 
                        ref={emailRef}
                        />
                        <button 
                        className="register-btn" 
                        onClick={handleStart}>
                            Get Started
                        </button>
                    </div>
                    ) : (
                    <form className="input">
                        <input 
                        type="username" 
                        placeholder="username" 
                        ref={usernameRef}
                        />
                        <input 
                        type="password" 
                        placeholder="Password" 
                        ref={passwordRef}
                        />
                    <button 
                    className="register-btn" 
                    onClick={handleFinish}>
                        Start
                    </button>
                </form>
                )}
            </div>
        </div>
    )
}