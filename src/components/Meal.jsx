import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
    const {strInstructions,strMeal,idMeal,strMealThumb} = meal;
    // console.log(meal);
    return (
        <div className='border flex gap-5 rounded-lg'>
          <img className='w-[230px] h-[300px] rounded-lg' src={strMealThumb} alt="" /> 
          <div className='flex flex-col justify-center'>
            <h3 className='font-semibold text-xl mb-2'>{strMeal}</h3>
            <p>{strInstructions.slice(0,100)}...</p>
            <div className=' mt-5'>
            <Link to={`/singleMealDetails/${idMeal}`} className='active mr-3'>view detail</Link>
            <Link className='text-red-600'>Add to Cart</Link>
            </div>
          </div>
        </div>
    );
};

export default Meal;