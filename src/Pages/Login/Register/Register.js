import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='register-form'>
            <h2 className='text-center text-primary my-5'>Register Here</h2>
            <form >
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br></br>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br></br>
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;