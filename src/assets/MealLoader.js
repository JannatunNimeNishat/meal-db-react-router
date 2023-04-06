const mealLoader = async(searchValue)=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    const loadedMeals = await res.json();

    return loadedMeals;
}

const singleMealLoader= async(idMeal)=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const singleMeal = await res.json();
    return singleMeal;
}


export { mealLoader, singleMealLoader}