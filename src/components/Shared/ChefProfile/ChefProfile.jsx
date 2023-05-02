/* eslint-disable no-unused-vars */
import React from 'react';

const ChefProfile = () => {
        
    return (
        <div className='grid md:grid-cols-3 w-3/4 mx-auto gap-5 py-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="bg-red-600 text-white px-5 py-2 font-semibold hover:bg-red-500">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefProfile;