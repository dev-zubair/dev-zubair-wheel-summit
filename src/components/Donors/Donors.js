import React, { useEffect, useState } from 'react';
import Person from '../Person/Person.js';
import './Donors.css';

const Donors = () => {
    const [donors, setDonors] = useState([]);
    useEffect(() => {
        fetch('./summit.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])
    return (
        <div className='donors-container'>
            <div>
                {
                    donors.map(donor => <Person donor={donor}></Person>)
                }
            </div>
            <div>
                <h1>Right side cart</h1>
            </div>
        </div>
    );
};

export default Donors;