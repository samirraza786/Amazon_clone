import React from 'react';
import './footer.scss';
import Divider from '@mui/material/Divider';
import logo from '../../assets/amazonLogo.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="col">
                    <span className="head">Get to know us</span>
                    <p><span> About Us</span></p>
                    <p><span> Careers</span></p>
                    <p><span> Press Releases</span></p>
                    <p><span> Amazon Cares</span></p>
                </div>
                <div className="col">
                    <span className="head">Get to know us</span>
                    <p><span> About Us</span></p>
                    <p><span> Careers</span></p>
                    <p><span> Press Releases</span></p>
                    <p><span> Amazon Cares</span></p>
                </div>
                <div className="col">
                    <span className="head">Get to know us</span>
                    <p><span> About Us</span></p>
                    <p><span> Careers</span></p>
                    <p><span> Press Releases</span></p>
                    <p><span> Amazon Cares</span></p>
                </div>
                <div className="col">
                    <span className="head">Get to know us</span>
                    <p><span> About Us</span></p>
                    <p><span> Careers</span></p>
                    <p><span> Press Releases</span></p>
                    <p><span> Amazon Cares</span></p>
                </div>
                
            </div>
            <Divider style={{backgroundColor:"#ddd"}}/>
            <div className="img-logo">
                <img src={logo} alt="logo" />
                <div className="country">
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                    <span>Australia</span>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-items">
                <span>Condition of Use & Sales</span>
                <span>Privacy Notice</span>
                <span>Interest-based Ads</span>
                <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
                </div>
             
            </div>
        </div>
    )
}

export default Footer;
