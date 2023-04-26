import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import NewNavbar from './components/newNavbar/NewNavbar';
import Home from './components/home/MainComp';
import Footer from './components/footer/Footer';
import Login from './pages/register/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cart from './pages/cart/Cart';
import BuyNow from './components/buynow/BuyNow';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import LoadingBar from 'react-top-loading-bar';


function App() {
  const context = useContext(UserContext);
  const { user,setProgress,progress } = context;
  return (
    <div>
      <Router>
        <LoadingBar
          color='#1976d2' height={3} transitionTime={600}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        {user && <NewNavbar />}
        <Routes>
          {/* <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to='/' />} />
          {/* <Route path="/getproduct/:id" element={user ? <Cart /> : <Navigate to='/login' />} /> */}
          <Route path="/getproduct/:id" element={<Cart />} />
          <Route path="/buynow" element={user ? <BuyNow /> : <Navigate to='/login' />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App;
