/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import './Registration.css'
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.init';
import Product from '../Product/Product';


const registration = () => {
    const auth = getAuth(app);

    const { createUser } = useContext(AuthContext)
    console.log(createUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log('error', error);
            })

     
    }



    return (
        <div >
            <form onSubmit={handleSubmit} className='w-50 my-5 shadow
        p-5 mx-auto fw-semibold'>
                <h4>Please Register</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Name</label>
                    <input required type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Email address</label>
                    <input required type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3" >
                    <label htmlFor="exampleInputPassword1" className="form-label text-secondary">Password</label>
                    <input required type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div >



                <div className='text-center'>
                    <Link >
                        <button type="submit" className="btn btn-primary my-2">Register</button>
                    </Link>

                </div>

            </form >
        </div >
    );
};

export default registration;