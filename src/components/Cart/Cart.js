import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const totalDonation = props.cart.reduce((previous, donor) => previous + +donor.donation, 0)


    return (
        <div>
            <h5>Total Donors: {props.cart.length}</h5>
            <h5>Total Donation: {totalDonation}</h5>
            <ul>
                <Name cart={props.cart} />
            </ul>
        </div>
    );
};


function Name({ cart }) {
    return (
        cart.map(p => <li>{p.name}</li>)
    )
}

export default Cart;