import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container border flex justify-between items-center p-5 '>
            <Link to='/'><h3 className='text-2xl font-bold'>Tasty HUT</h3></Link>
            <div>
                <NavLink to='/orders'
                    className={({isActive}) => isActive ? 'active' : ''}
                >Orders</NavLink>
                <Link to='/signUp' className='ml-5 py-3 px-5 bg-yellow-500 text-white rounded-lg'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;