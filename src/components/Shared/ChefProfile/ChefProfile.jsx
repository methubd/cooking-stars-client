/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

const ChefProfile = ({chef}) => {        
    console.log(chef.chef_id);
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chef?.image_url} className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {chef?.name} </h2>
                    <p>{chef?.description}</p>
                    <div className='flex'>
                        <HandThumbUpIcon width={20}></HandThumbUpIcon>
                        <p className='px-2 bg-slate-300 rounded-sm mx-2'> {chef?.likes}</p>
                        
                        <p className='px-2 bg-slate-300 rounded-sm mx-2 bg-lime-400'>{chef?.recipes.length} Recipes</p>
                    </div>
                    <div className="card-actions">
                        <button className="bg-gray-600 text-white px-5 py-2 font-semibold hover:bg-red-500">More Details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ChefProfile;