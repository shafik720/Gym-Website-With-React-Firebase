import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-div">
            <h2>Login</h2>
            <hr />
            <div className="login-form">
                <form action="">
                    <div className="">
                        <input type="email" name="" placeholder="Your Email" id="" />
                    </div>
                    <div className="">
                        <input type="password" name="" placeholder="Your Password" id="" />

                        <button>Login</button>
                    </div>
                </form>
            </div>
            <div className="forgot-link">
                <span><a href="">Forgot Password / &nbsp; </a></span>
                <span><Link to="/register"> Register</Link></span>
            </div>
        </div>
    );
};

export default Login;