/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <h2>{chef.name}</h2>
        </div>
    );
};

export default ChefDetails;