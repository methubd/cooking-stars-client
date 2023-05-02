/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const RecipeDetails = ({recipe}) => {
    const {name} = recipe;
    console.log(recipe.ingredients);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <hr />
                <div className='text-red-400'>
                {
                    recipe.ingredients.map(ingred => <p key={recipe.id}>{ingred}</p>)
                }
                </div>
                <hr />
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default RecipeDetails;