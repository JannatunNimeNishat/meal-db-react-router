import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMealDetail = () => {
    const singleMeal = useLoaderData();
    const {strInstructions,strMeal,idMeal,strMealThumb,strCategory,strArea,strYoutube} = singleMeal.meals[0];
    console.log(singleMeal.meals[0]);
    return (
        <div className='my-container grid grid-cols-2 gap-5'>
           <div className=''>
            <img className='w-full h-full' src={strMealThumb} alt="" />
           </div>
           <div className='p-3'>
            <h3 className='text-3xl font-semibold '>{strMeal}</h3>
            <p><span className='text-xl font-semibold '>Category: </span>{strCategory}</p>
            <p><span className='text-xl font-semibold '>Area: </span>{strArea}</p>
            <p><span className='text-xl font-semibold '>Instruction: </span>{strInstructions}</p>
            <p><span className='text-xl font-semibold '>Youtube: </span><a href={strYoutube}>{strYoutube}</a></p>
           </div>
        </div>
    );
};

export default SingleMealDetail;