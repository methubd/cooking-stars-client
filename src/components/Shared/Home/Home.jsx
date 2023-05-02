/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import ChefProfile from '../ChefProfile/ChefProfile';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className='grid md:grid-cols-3 w-3/4 mx-auto gap-5 py-10'>
                {
                    data.chefs.map(chef => <ChefProfile 
                        chef={chef} 
                        key={chef.chef_id}
                        ></ChefProfile>)
                }
            </div>
        </div>
    );
};

export default Home;