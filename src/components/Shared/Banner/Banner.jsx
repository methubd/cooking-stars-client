/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div className='text-center py-20 bg-slate-100'>
            <div className=''>
                <h2 className='text-5xl font-bold leading-normal'>Learn The <span className='text-red-600'>Art</span> Of <br /> Cooking Here </h2>
                <p className='text-xl py-5 '>Learn from us, how you can make delicious food using your own kitchen.</p>
                <button className='bg-red-600 text-white px-5 py-2 font-semibold hover:bg-red-500'>EXPLORE RECIPES</button>
            </div>
        </div>
    );
};

export default Banner;