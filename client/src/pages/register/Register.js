import React, { useState, useContext } from 'react';
import './register.scss';
import logo from '../../assets/amazonLogoBlack.png';
import { Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const context = useContext(UserContext);
    const { setProgress } = context;

    const handleRegister = async (e) => {
        e.preventDefault();
        setProgress(10);

        if (password !== cpassword) {
            toast.warn('Password and confirm password do not match!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        try {
            setProgress(20);
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                mobile,
                password,
                cpassword
            });
            // console.log(res.data);
            setProgress(70);
            if (res.data.success) {

                // react toastify
                toast.success('Registered successfully, login to continue!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });


            }
        } catch (err) {
            console.log(err);
            // react toast
            toast.error('Something went wrong, check whether email or Phone number already exist!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        setProgress(100);
    }




    return (
        < div className='register' >
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            {/* alert */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{ position: "absolute", top: "60px" }}
            />

            <div className="form-div">
                <h1>Create Account</h1>

                <form className="my-form" onSubmit={handleRegister}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id='name' onChange={e => setName(e.target.value)} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={e => setEmail(e.target.value)} required />

                    <label htmlFor="number">Number</label>
                    <input type="tel" id='number' onChange={e => setMobile(e.target.value)} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Atleast 6 characters' minLength={6} onChange={e => setPassword(e.target.value)} required />

                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" id='cpassword' minLength={6} onChange={e => setCpassword(e.target.value)} required />


                    <Button variant='contained' type="submit">Continue</Button>

                    <div className="info">
                        <p>Already have an account? <Link style={{ color: "#248fc1" }} className='link' to='/login'> Sign in<ArrowRightIcon className='arrow' /></Link></p>
                        <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
                    </div>

                </form>
            </div>
        </div >
    )
}

export default Register;
