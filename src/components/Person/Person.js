import React from 'react';
import './Person.css';

const Person = (props) => {
    const { name, picture, company, country, email, donation } = props.donor;
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={picture} alt="" />
                        <div class="card-body">
                            <h1 class="card-title">Name: {name}</h1>
                            <h4 class="card-title">Company: {company}</h4>
                            <h5 class="card-title">Country: {country}</h5>
                            <h6 class="card-title">Email: {email}</h6>
                            <h3 class="card-title">Donaite: {donation}</h3>
                            <button>Add To cart</button>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;




