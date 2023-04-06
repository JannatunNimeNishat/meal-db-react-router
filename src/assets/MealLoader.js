const mealLoader = async(searchValue)=>{
    console.log(searchValue);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    const loadedMeals = await res.json();

    return loadedMeals;
}

export default mealLoader;
