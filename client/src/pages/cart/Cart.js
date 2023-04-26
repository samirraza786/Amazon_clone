import React, { useEffect, useState } from 'react';
import './cart.scss';
import { Divider } from '@mui/material';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from "react-spinners/HashLoader"; //loading animation



const Host = "http://localhost:5000/api";


function Cart() {

    const location = useLocation();
    const productId = location.pathname.split('/')[2];

    const [product, setPruduct] = useState([]);
    const context = useContext(UserContext);
    const { user, setUser, setProgress } = context;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                setProgress(10);
                const res = await axios.get(`${Host}/products/${productId}`);
                // console.log(res);
                setProgress(60);
                setPruduct(res.data);
                setProgress(80);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
            setProgress(100);
        }

        getProduct();
    }, [productId, setProgress])


    const addToCart = async () => {
        if (user) {
            try {
                const res = await axios.post(`${Host}/products/addcart/${productId}`, {
                    userId: user._id,
                }, {
                    headers: {
                        token: "bearer " + localStorage.getItem('accessToken'),
                    }
                });
                // console.log(res.data);
                // update login user so that its cart get updated
                if (res.data.success) {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    setUser(res.data.user);

                    // react toastify
                    toast.success('Product added to cart successfully!', {
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
                toast.error('Invalid user!', {
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
        }
        else {
            // react toastify
            toast.warn('Sign In first to continue!', {
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
    }

    
    return (
        <>
            {loading ?
                (<>
                    <div className="loading">
                        <HashLoader
                            loading={loading}
                            size={60}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            color='#36CEF6'
                        />
                    </div>
                </>
                ) :
                (
                    <>
                        <div className='cart'>
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

                            <div className="item-img">
                                <img src={product.detailUrl} alt="product-img" />
                                <div className="buttons">
                                    <button className='btn-1' onClick={addToCart}>Add to Cart </button>
                                    <Link className='link' style={{ width: "100%" }} to='/buynow'><button className='btn-2'>Buy Now </button></Link>
                                </div>
                            </div>

                            <div className="item-info">
                                <h2>{product.shortTitle}</h2>
                                <h3>{product.longTitle}</h3>
                                <Divider />

                                <span>M.R.P. : <s>₹{product.price?.mrp}</s></span>

                                <span>Deal of the Day : <span style={{ color: "#B12704", fontWeight: "500" }}> ₹{product.price?.cost}</span></span>

                                <span>You save : <span style={{ color: "#B12704", fontWeight: "500" }}> ₹{product.price?.mrp - product.price?.cost} ({product.price?.discount})</span></span>

                                <span style={{ color: "#B12704", fontWeight: "500" }}>Discount : <span style={{ color: "#111", fontWeight: "500" }}> {product.discount}</span></span>

                                <span style={{ color: "#007185", fontWeight: "700", fontSize: "17px" }}>FREE Delivery : <span style={{ color: "#111", fontWeight: "500", fontSize: "17px" }}> Oct 8 - 21 </span> Details</span>

                                <span>Fastest delivery : <span style={{ color: "#111", fontWeight: "500" }}>Tomorrow 11AM</span> </span>
                                <span style={{ fontSize: "15px", marginBottom: "10px" }}> <span style={{ color: "#111", fontWeight: "500", fontSize: "16px" }}> About the item : </span> {product.description}</span>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Cart;
