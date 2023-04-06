import React from 'react';
import bannerImg from '../images/banner_1.png'
const Search = () => {
    const img = '../images/banner_1.png'
    return (
        <div className={`bg-[url('${bannerImg}')] h-[calc(90vh)]  bg-center bg-cover `}>
            <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50 text-white'>
                <div >
                    <h3 className='font-bold text-5xl text-center'>Taste Our Delicious <br /> Best Foods</h3>
                    <p className='text-center mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humou.</p>
                    <div className='text-center'>
                        <input className='px-16 py-2 rounded mt-5' type="text" name="" id="" placeholder='search any food'/>
                        <button className='bg-yellow-500 px-5 py-2 rounded font-semibold'>Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Search;