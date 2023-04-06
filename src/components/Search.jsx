import React from 'react';
import bannerImg from '../images/banner_1.png'
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const navigate = useNavigate();
    
    let search;
    const setSearchValue = (e) => {
        search = e.target.value;
    }

    const handleSearchBtn = () => {
        navigate(`meals/${search}`);
    }
    return (
        <div className={`bg-[url('${bannerImg}')] h-[calc(90vh)]  bg-center bg-cover `}>
            <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50 text-white'>
                <div >
                    <h3 className='font-bold text-5xl text-center'>Taste Our Delicious <br /> Best Foods</h3>
                    <p className='text-center mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humou.</p>
                    <div className='text-center'>
                        <input onChange={setSearchValue} className='px-16 py-2 rounded mt-5 text-black' type="text" name="" id="" placeholder='search any food' />
                        <button onClick={handleSearchBtn} className='bg-yellow-500 px-5 py-2 rounded font-semibold'>Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Search;