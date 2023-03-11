import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import './login.scss';
import logo from '../../assets/amazonLogoBlack.png';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// For material ui divider to make lines around text
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(UserContext);
  const { setUser,setProgress } = context;


  const handleLogin = async (e) => {
    e.preventDefault();
    setProgress(10);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });
      // console.log(res.data);
      setProgress(70);
      if (res.data.success) {
        console.log("Login successfull");
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("accessToken", res.data.accessToken);
      }
    } catch (err) {
      console.log(err);

      // react toast
      toast.error('Login with correct credentials!', {
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
    <div className='login'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/* alert */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
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
        <h1>Sign In</h1>

        <form className="my-form" onSubmit={handleLogin}>

          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)} required />


          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' minLength={6} placeholder='Atleast 6 characters' onChange={(e) => setPassword(e.target.value)} required />


          <Button variant='contained' type="submit">Continue</Button>

          <div className="info">
            <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
          </div>
        </form>
      </div>

      <div className='divider'>
        <Root >
          <Divider > New to Amazon?</Divider>
        </Root>
        <Link style={{ width: "100%" }} className='link' to='/register'><Button variant='contained'> Create your Amazon Account</Button></Link>
      </div>

    </div>
  )
}

export default SignIn;
