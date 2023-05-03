/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const Navbar = () => {
    const {user, logOut, setUser} = useContext(AuthContext);

    const navigation = useNavigate();

    const handleLogout = () => {
        logOut()
        .then(result => {
            setUser(null)
            toast.success('Thank you')
            navigation('login')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='w-3/4 mx-auto'>
            <Toaster/>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/'><a className="btn btn-ghost normal-case text-xl">Cooking Stars</a></Link>
            </div>

            <div className='md:px-24'>
                <Link to='/' className='md:ps-5'>Home</Link>
                <Link to='/blog' className='md:ps-5'>Blog</Link>
                { user ?
                    ""
                    :
                    <Link to='/register' className='md:ps-5'>Register</Link>
                }
            </div>

            {
                user ? 
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png"} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><button onClick={handleLogout}><a>Logout</a></button></li>
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