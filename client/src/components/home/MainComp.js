import React, { useEffect, useContext } from 'react';
import './mainComp.scss';
import Banner from './Banner';
import Slide from './Slide';
import axios from 'axios';
import UserContext from '../../context/UserContext';


const Host = "http://localhost:5000/api";

function MainComp() {

    // get all products
    const context = useContext(UserContext);
    const { products, setProducts,setProgress } = context;

    useEffect(() => {
        const getProducts = async () => {
            try {
                setProgress(10);
                const res = await axios.get(Host + "/products");
                // console.log(res);
                setProgress(60);
                setProducts(res.data);
                setProgress(80);
            } catch (err) {
                console.log(err);
            }
            setProgress(100);
        }

        getProducts();
    }, [setProducts,setProgress]);


    return (
        <div className='home-section'>
            <div className="banner-section">
                <Banner />
            </div>


            {/* small siderbar at right -- 1st slide */}
            <div className="slider-part">
                <div className="left-slide">
                    <Slide products={products} />
                </div>
                <div className="right-slide">
                    <span>Festive Latest Launches</span>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                    <a href="/">See more</a>
                </div>
            </div>


            <Slide title="Today's Deals" products={products} />

            {/* image below 1st slide */}
            <div className="center-img">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Lighting-solutions_LS_Desktop.jpg" alt="sponser" />
                <span>Sponsored!</span>
            </div>


            <Slide title="Best Deals" products={products} />
            <Slide title="Upto 80% off" products={products} />
            <Slide title="More items to consider" products={products} />

        </div>
    )
}

export default MainComp;
