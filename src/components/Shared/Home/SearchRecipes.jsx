/* eslint-disable no-unused-vars */
import { MagnifyingGlassIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const SearchRecipes = () => {
    return (
        <div className='w-3/4 mx-auto bg-slate-50 py-10 px-10 shadow-xl rounded-xl md:text-center'>
            <div className=''>
                    <label className='text-2xl' htmlFor="search">Search for Recipes</label>
                <div className=''>
                    <input className='bg-slate-100 border-none md:w-96 py-2 px-2 rounded-lg my-2 outline-none md:mx-auto' type="text" name='search' placeholder='Search...'  /> <br />
                    <button><MagnifyingGlassIcon className='w-10 bg-lime-600 text-white px-2 py-2'/></button> 
                </div>  
                <br />
                <button>Advance Search <ArrowDownIcon className='w-3 mx-auto'/></button>
            </div>
            
        </div>
    );
};

export default SearchRecipes;