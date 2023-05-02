/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {    
    const {logIn, setUser} = useContext(AuthContext);
    const navitation = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(email === ""){
            toast.error('Please enter your valid email address.')
            return;
        }
        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success('Welcome to our system.')
            form.reset();
            navitation('/')
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className='md:w-3/4 mx-auto'>
            <h2 className='text-center text-2xl font-bold py-5'>Please Login</h2>
            <form onSubmit={handleLogin} className='text-center '>
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="text" name="email" id="email" placeholder='Email' /> <br />
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="password" name="password" id="password" placeholder='Password' /> <br />

                <input className='bg-gray-600 text-white px-5 py-2 my-1 font-semibold hover:bg-red-500' type="submit" name="submit" id="submit" value="Login" />
            </form>
            <p className='text-center'> <small>New user? <span className='text-green-500'><Link to='/register'>Please Register</Link></span></small> </p>
            <Toaster/>
        </div>
    );
};

export default Login;