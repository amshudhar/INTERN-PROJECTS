import React from 'react';

const Productdetails = ({ recipe }) => {
    return (
        <div className='d-flex justify-content-center my-5'>
        <div className='bg-white product rounded-5'>
            <h2 className='py-3'>{recipe.name}</h2>
            <div className='d-flex '>
                <img className='rounded border shadow-lg m-3' src={recipe.image} alt={recipe.name} />
                <p className='my-3 text-start px-5'><b>Ingredients:</b> {recipe.ingredients.join(', ')}</p>
            </div>
            
            <p className='px-5 my-3 text-start'><b>Cooking Instructions:</b> {recipe.instructions}</p>
        </div>
        </div>
    );
};

export default Productdetails;
