import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';


const Register = () => {
    const [isAgree, setIsAgree] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // --- creating a loading spinner
    let loader = null ; 
    const errorMsg = (dummy) => toast.error(dummy || 'error', {
        position: "bottom-center",
        autoClose: 15000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // --- creating user with firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            console.log('Password should be more than 6 character');
            return;
        }
        if (password !== confirmPassword) {
            console.log("Password didn't matched");
            return;
        }

        loader = <span><ClipLoader color="white" size={20} /></span>
        createUserWithEmailAndPassword(email, password);
        return;
    }

    useEffect(() => {
        if (error) {
            console.log(error.message);
            errorMsg(error.message);
        }
        if (loading) {
            loader = <span><ClipLoader color="white" size={20} /></span>
        }
        if (!error && !loading && user) {
            console.log("User created successfully : ", user);
        }
    }, [error, loading, user])
    return (
        <div className="login-div">
            <h2>Register</h2>
            <hr />
            <div className="login-form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="">
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" placeholder="Your Email" id="" />
                    </div>
                    <div className="">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="" placeholder="Your Name" id="" required />
                    </div>
                    <div className="">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" placeholder="Your Password" id="" required />
                    </div>
                    <div className="">
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="" placeholder="Confirm Password" id="" required />
                        <div className="agree-div">
                            <input onChange={() => setIsAgree(!isAgree)} type="checkbox" name="" id="" value={isAgree} required />
                            <p>Agree to the terms and conditions</p>
                        </div>
                        <button 
                        type="submit" 
                        disabled={!isAgree || loading} 
                        className={`${isAgree ? "" : "disabled-button"} ${loading ? "loading-state" : ""}`}
                         > 
                         {loading && <span className="loader-small"><ClipLoader color="white" size={15} /></span> } <span>{loading ? 'Registering' : 'Register'}</span> 
                         </button>
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

export default Register;