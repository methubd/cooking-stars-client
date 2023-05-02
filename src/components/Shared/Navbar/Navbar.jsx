/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {



    return (
        <div className='w-3/4 mx-auto'>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Cooking Stars</a>
            </div>
            
            
            <div className='md:px-24'>
                <Link to='/' className='md:ps-5'>Home</Link>
                <Link to='/blog' className='md:ps-5'>Blog</Link>
            </div>

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
            </div>
        </div>
    );
};

export default Navbar;