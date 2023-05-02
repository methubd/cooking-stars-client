/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';


const Register = () => {
    const {user, createNewUser} = useContext(AuthContext);
    
    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(email === ""){
            toast.error('Please enter your email.');
            return;
        }

        else if(password.length < 6){
            toast.error('Password must be 6 charecter');
            return;
        }

        else if(password !== confirm){
            toast.error('Password not matched', {
                duration: 1500,
            })
            return;
        }

        createNewUser(email, password)
        .then(result => {
            const registeredUser = result.user;
            console.log(registeredUser);
            form.reset();
            toast.success('User Account Successfully Created')
        })
        .catch(error => {
            console.log(error);
        })
    }
    

    return (
        <div className='md:w-3/4 mx-auto'>
            <h2 className='text-center text-2xl font-bold py-5'>Please Register</h2>
            <form onSubmit={handleCreateUser} className='text-center '>
            <Toaster/>
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="text" name="name" id="name" placeholder='Your Name' /> <br />
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="text" name="photo-url" id="photo-url" placeholder='Photo URL' /> <br />
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="text" name="email" id="email" placeholder='Email' /> <br />
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="password" name="password" id="password" placeholder='Password' /> <br />
                <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none' type="password" name="confirm" id="confirm" placeholder='Re-Type Password' /> <br />
                <input className='bg-gray-600 text-white px-5 py-2 my-1 font-semibold hover:bg-red-500' type="submit" name="submit" id="submit" value="Register" />
            </form>
            <p className='text-center'> <small>Already have an account? <span className='text-green-500'><Link to='/login'>Please Login</Link></span></small> </p>
        </div>
    );
};

export default Register;