import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Person = (props) => {
    // console.log('clicked');
    const { name, picture, company, country, email, donation } = props.donor;

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div style={{ width: '300px' }}>
                <div className="card h-100 mb-5">
                    <img src={picture} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h6 className="card-title">Company: {company}</h6>
                        <h6 className="card-title">Country: {country}</h6>
                        <h6 className="card-title">Email: {email}</h6>
                        <h4 className="card-title">Donate: {donation}</h4>
                        <button onClick={() => props.handleAddToCart(props.donor)} className='btn btn-primary'>{element} Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;




