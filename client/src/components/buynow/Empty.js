import React from 'react';
import { Link } from 'react-router-dom';
import './empty.scss';

function Empty() {
  return (
    <div className="empty">
                <div className="empty_buy" style={{ padding: "40px 40px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xpOr8GbZhxyLr0uD8mEn9L6lsHT-jHq2Kg&usqp=CAU" alt="cart img" />
                    <div className="emptydata">
                        <h1>Your Amazon Basket is empty</h1>
                        <Link className=" link" to="/"><p>See recommendations</p></Link>
                    </div>
                    <Link className="empty_btn link" to="/">Add Your Items</Link>
                </div>
        </div>
  )
}

export default Empty;
