/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='md:w-3/4 mx-auto'>
            <h2 className='text-center text-2xl font-bold py-5'>Please Login</h2>
            <form className='text-center '>
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="text" name="email" id="email" placeholder='Email' /> <br />
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="password" name="password" id="password" placeholder='Password' /> <br />

                <input className='bg-gray-600 text-white px-5 py-2 my-1 font-semibold hover:bg-red-500' type="submit" name="submit" id="submit" value="Login" />
            </form>
            <p className='text-center'> <small>New user? <span className='text-green-500'><Link to='/register'>Please Register</Link></span></small> </p>
        </div>
    );
};

export default Login;