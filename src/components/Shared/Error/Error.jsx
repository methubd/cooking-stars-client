/* eslint-disable no-unused-vars */
import { MagnifyingGlassIcon, ServerIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='md:flex justify-center md:pt-10'>
            <div className='text-center'>
                <ServerIcon className='w-10 mx-auto py-10'/>
                <h1 className='text-5xl'>404</h1>
                <p className='text-slate-500'>This page could not be found. May try a search?</p>
                <input className=' text-center bg-slate-100 border-none py-2 px-2 rounded-lg my-2 outline-none' type="text" placeholder="Search Now" />
                <Link><MagnifyingGlassIcon className='w-10 mx-auto bg-lime-600 text-white px-2 py-2 mb-5'/></Link>    
                <Link className='bg-lime-300 py-2 px-5 mt-5' to='/'>Home Page</Link>           
                
            </div>
        </div>
    );
};

export default Error;