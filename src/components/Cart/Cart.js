import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const totalDonation = props.cart.reduce((previous, donor) => previous + +donor.donation, 0)


    return (
        <div>
            <h5><FontAwesomeIcon icon={faUser} /> {props.cart.length}</h5>
            <h5>Total Funded <FontAwesomeIcon icon={faDollarSign} />: {totalDonation}</h5>
            <ul>
                <Name cart={props.cart} />
            </ul>
        </div>
    );
};


function Name({ cart }) {
    return (
        cart.map(p => <div className='donor-name' key={p.email}><h5><FontAwesomeIcon icon={faThumbsUp} /> {p.name}</h5></div>)
    )
}

export default Cart;