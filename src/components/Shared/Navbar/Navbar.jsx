/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='w-3/4 mx-auto'>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Cooking Stars</a>
            </div>

            <div className='md:px-24'>
                <Link to='/' className='md:ps-5'>Home</Link>
                <Link to='/blog' className='md:ps-5'>Blog</Link>
                <Link to='/register' className='md:ps-5'>Register</Link>        
            </div>

            {
                user ? 
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            :
            <Link to='/login' className='md:ps-5 bg-gray-600 text-white px-5 py-2 my-1 font-semibold hover:bg-red-500'>Login</Link>
            }

            </div>
        </div>
    );
};

export default Navbar;