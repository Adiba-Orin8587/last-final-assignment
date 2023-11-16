/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.init';

const Login = () => {

    const auth = getAuth(app);

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log('error', error);
            })

    }


    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }


    return (
        <div >
            <form onSubmit={handleSubmit} className='w-50 my-5 shadow
        p-5 mx-auto fw-semibold '>
                <h4>Please login</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Email address</label>
                    <input required type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3" >
                    <label htmlFor="exampleInputPassword1" className="form-label text-secondary">Password</label>
                    <input required type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div >
                <div className='d-flex justify-content-around'>
                    <Link className='text-none fw-semibold'>
                        Forget password?
                    </Link>
                    <Link to='/registration' className='text-none fw-semibold'>
                        Create new account?
                    </Link>

                </div>

                <div className='text-center'>

                    <button type="submit" className="btn btn-primary my-2">Login</button>
                    <div className='d-flex text-center mt-2'>
                        <hr className='py-2 w-50' />
                        <p className='text-center text-secondari px-2 mt-1'>OR</p>
                        <hr className='py-2 w-50' />
                    </div>
                 
                        <img onClick={handleGoogleLogin} className='google mx-3' src="https://res.cloudinary.com/dpc7vvoqg/image/upload/v1699976089/ttb5uemkjnioxlhpxqgq.jpg" alt="" />
                           </div>
            </form >
        </div >
    );
};

export default Login;