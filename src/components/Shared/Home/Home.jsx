/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import ChefProfile from '../ChefProfile/ChefProfile';
import { useLoaderData } from 'react-router-dom';
import SearchRecipes from './SearchRecipes';
import CookingClasses from './CookingClasses';

const Home = () => {
    const data = useLoaderData();
    
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
            <CookingClasses></CookingClasses>
            <SearchRecipes></SearchRecipes>
        </div>
    );
};

export default Home;