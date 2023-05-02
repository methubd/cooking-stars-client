/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefProfile = ({chef}) => {        
    console.log(chef);
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chef.image_url} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {chef.name} </h2>
                    <p>{chef.description}</p>
                    <div className="card-actions">
                        <button className="bg-red-600 text-white px-5 py-2 font-semibold hover:bg-red-500">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefProfile;