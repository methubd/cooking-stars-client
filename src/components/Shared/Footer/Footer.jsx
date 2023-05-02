/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-400'>
            <div className='md:flex justify-between md:w-3/4 mx-auto  text-white py-20 px-10 mt-16'>
                <div>
                    <h1 className='text-slate-500 text-lg'>Get in touch</h1>
                    <p>1568, North View Building, Gulshan-1, Dhaka.</p>
                    <p>query@cookingstars.com</p>
                </div>
                <div>
                    <h1 className='text-slate-500 text-lg'>Social</h1>
                    <p>Linkedin</p>
                    <p>Facebook</p>
                </div>
                <div>
                    <h1 className='text-slate-500 text-lg'>Restaurant</h1>
                    <p>Gulshan-1</p>
                    <p>Gulshan-2</p>
                    <p>Mirpur Shewrapara</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-slate-500 text-lg'>Subscribe our updates</h1>
                    <input className='py-2 rounded-md px-4' type="text" name="" id="" placeholder='Email' /> <br />
                    <input className='bg-gray-600 text-white px-5 py-2 my-1 font-semibold hover:bg-red-500' type="submit" name="" id="" />
                </div>
            </div>
            <hr />
            <p className='text-center text-white py-5'>Copyright: CookingStars Corporation</p>
        </div>
    );
};

export default Footer;