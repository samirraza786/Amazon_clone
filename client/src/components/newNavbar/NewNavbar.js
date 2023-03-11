import React from 'react';
import './NewNavbar.scss';
import logo from '../../assets/newNavbar-logo.jpg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NewNavbar() {
    return (
        <div className='newNavbar'>
            <div className="left">
                <ul>
                    <Link className="link" to = '/'><Button><li>All</li></Button></Link>
                    <Button><li>Mobile</li></Button>
                    <Button><li>Best Sellers</li></Button>
                    <Button><li>Fashion</li></Button>
                    <Button><li>Customer Service</li></Button>
                    <Button><li>Electronics</li></Button>
                    <Button><li>Prime</li></Button>
                    <Button><li>Today's Deals</li></Button>
                    <Button><li>Amazon Pay</li></Button>
                </ul>
            </div>


            <div className="right">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default NewNavbar;
