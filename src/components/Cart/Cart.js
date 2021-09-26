import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const totalDonation = props.cart.reduce((previous, donor) => previous + +donor.donation, 0)

    return (
        <div>
            <h3>Total Donors: {props.cart.length}</h3>
            <h4>Total Donation: {totalDonation}</h4>
        </div>
    );
};

export default Cart;