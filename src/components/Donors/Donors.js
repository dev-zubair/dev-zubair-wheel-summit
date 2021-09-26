import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart.js';
import Person from '../Person/Person.js';
import './Donors.css'

const Donors = () => {
    const [donors, setDonors] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./summit.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])

    const handleAddToCart = (donor) => {
        // console.log(donor);
        const newCart = [...cart, donor];
        setCart(newCart);

    }
    return (
        <div className="container">

            <div className="row donors-main">
                <div className="col-9 donors">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {
                            donors.map(donor => <Person
                                key={donor._id}
                                donor={donor}
                                handleAddToCart={handleAddToCart}
                            ></Person>)
                        }
                    </div>
                </div>
                <div className='col-3 cart-section'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Donors;
























































