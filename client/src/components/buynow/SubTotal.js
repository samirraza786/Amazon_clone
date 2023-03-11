import React from 'react'
import './subtotal.scss';

function SubTotal(props) {
  const {subtotal,cartsData} = props;

  return (
    <div className='sub-total'>
      <h3> Subtotal ({cartsData.length} items) : <strong style={{ fontWeight: "700", color: "#111" }}> ₹{subtotal}.00</strong> </h3> 
    </div>
  )
}

export default SubTotal;
