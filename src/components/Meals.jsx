import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
    const meals = useLoaderData()
    // console.log(meals);
    return (
        <div className='my-container mt-3'>
            <h3 className='text-2xl font-semibold text-center'>Your Favorite Food</h3>
            <div className='mt-5 grid grid-cols-2 gap-5'>
                {
                    meals.meals.map(meal =><Meal
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;