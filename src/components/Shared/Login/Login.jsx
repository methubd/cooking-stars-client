/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {    
    const {logIn, setUser, loginWithGoogle, loginWithGitHub} = useContext(AuthContext);
    const navitation = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(email === ""){
            toast.error('Please enter your login credentials.')
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

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success('Welcome to our system.')
            navitation('/')
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGitHubLogin = () => {
        loginWithGitHub()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser)
            toast.success('Welcome to our system.')
            navitation('/')
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
            <div>
                <button onClick={handleGoogleLogin} className='flex items-center text-lg font-semibold bg-slate-200 px-5 rounded mx-auto my-5'>
                    <img className='w-10' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                    Login with Google
                </button>
                <button onClick={handleGitHubLogin} className='flex items-center text-lg font-semibold bg-slate-200 px-5 rounded mx-auto my-5'>
                    <img className='w-10 me-4' src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default Login;