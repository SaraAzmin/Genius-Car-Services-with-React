import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {

        event.preventDefault();

        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        //const agree = event.target.terms.checked;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }


    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 className='text-center text-primary my-3'>Register Here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br></br>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br></br>
                <input type="password" name="password" id="" placeholder='Your Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>

                <input disabled={!agree}
                    className='btn btn-primary w-50 mx-auto d-block mt-3' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;