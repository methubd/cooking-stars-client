/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef.recipes);
    
    return (
        <div className='w-3/4 mx-auto'>
            <img className='w-96 mx-auto rounded-2xl' src={chef.image_url} alt="" />
            <h2 className='text-center text-4xl font-bold py-5 text-gray-500'>{chef.name}</h2>
            <p className='text-center text-lg text-gray-500 border rounded-md'>{chef.description}</p>
            <p className='text-center bg-lime-300 px-2 rounded-sm mx-2 w-40 mx-auto my-5'>Total Recipes: {chef.recipes.length}</p>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    chef.recipes.map(recipe => <RecipeDetails
                    recipe = {recipe}
                    key={recipe.recipe_id}
                    ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;