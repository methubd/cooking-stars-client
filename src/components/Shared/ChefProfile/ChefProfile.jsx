/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HandThumbUpIcon, BookmarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefProfile = ({chef}) => {  

    const [bookmark, setBookmark] = useState({});
    console.log(bookmark);
    
    const handleBookmark = (id) => {
        const cart = bookmark;
        const newCart = bookmark + id;
        setBookmark(newCart)        
    }
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
            
                <figure className="px-10 pt-10">
                    
                    <img src={chef?.image_url} className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <h2 className="card-title"> {chef?.name} </h2>
                    {/* <p>{chef?.description}</p> */}
                    <div className='flex'>
                        <HandThumbUpIcon width={20}></HandThumbUpIcon>
                        <p className='px-2 bg-slate-300 rounded-sm mx-2'> {chef?.likes}</p>
                        <p className='px-2 rounded-sm mx-2 bg-lime-300'>{chef?.recipes.length} Recipes</p>
                    </div>
                    <div className="card-actions">
                        <Link className='bg-gray-600 text-white px-3 py-.5 my-5 font-semibold hover:bg-red-500' to={`/chef-profile/${chef.chef_id}`}>View Recipes</Link>
                    </div>
                    <button onClick={() => handleBookmark(chef)}><BookmarkIcon className='h-6'></BookmarkIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ChefProfile;