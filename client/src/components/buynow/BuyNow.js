import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { Divider } from '@mui/material';
import './buynow.scss';
import Option from './Option.js';
import SubTotal from './SubTotal.js';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Empty from './Empty';

function BuyNow() {
    const context = useContext(UserContext);
    const { user } = context;

    const cartsData = user.carts; // array of product objects
    // console.log(cartsData);

    // subtotal
    var subtotal = 0;


    return (
        <div className='buynow'>
            <div className="left">
                {cartsData.length >= 1 &&
                    <>
                        <h1>Shopping Cart</h1>
                        <p className='select-para'>Select all items</p>
                        <div className="price">
                            <span>Price</span>
                        </div>
                    </>
                }

                <Divider />

                {/* products in cart */}
                {cartsData.length > 0 ?
                    (cartsData.map((cart, index) => {
                        subtotal = subtotal + cart.price.cost; // total cost
                        return (
                            <div key={index}>
                                <div className="item-container" >
                                    <img src={cart.detailUrl} alt="" />
                                    <div className="item-info">
                                        <span className='big'>{cart.longTitle}</span>
                                        <span className='small'>{cart.shortTitle}</span>
                                        <p style={{ color: "#c45500" }}>Usually Dispatch in 8 days.</p>
                                        <p>Eligible for FREE shipping.</p>
                                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="amazon certified" />
                                        {/* sending productId so that we can delete that product from cart */}
                                        <Option productId={cart._id} />
                                    </div>
                                    <div className="price">
                                        ₹{cart.price.cost}.00
                                    </div>
                                </div>

                                <Divider style={{ marginBottom: "15px" }} />
                            </div>
                        )

                    })) : (
                        <Empty />
                    )}



                {cartsData.length >= 1 && <SubTotal subtotal={subtotal} cartsData={cartsData} />}

            </div>

            <div className="right">
                <div className="top">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="top img" />
                </div>

                <div className="bottom">
                    <span >Your order is available for FREE Delivery.</span>
                    <p>Select this option at Checkout. Details</p>

                    <h3> Subtotal ({cartsData.length} items) : <strong style={{ fontWeight: "700", color: "#111" }}> ₹{subtotal}.00</strong> </h3>

                    <Button variant='contained'>Proceed to Buy</Button>

                    <div className="emi">
                        <p className='emi-text'>Emi available </p>
                        <KeyboardArrowUpIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BuyNow;
