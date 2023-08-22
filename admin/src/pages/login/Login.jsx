import React, { useContext, useState } from 'react';
import "./login.css";
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/ApiCalls';

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { isFetching, dispatch } = useContext(AuthContext)
    

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleLogin(event) {
        event.preventDefault();
        // use login function from authContext and pass in the form data and dispatch
        login(formData, dispatch)
    }


    return (
        <div className="login">
            <div>
                <div className="img-container">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" alt="" className="login-img" />
                </div>
                <h1 className ="login-header">Netflix Admin Dashboard</h1>
                <form className="login-form">
                    <input 
                    type="email" 
                    placeholder="email" 
                    className="login-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    />
                    <input 
                    type="password" 
                    placeholder="password" 
                    className="login-input" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange} 
                    />
                    <button 
                    className="login-btn" 
                    onClick={handleLogin}
                    disabled={isFetching}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}