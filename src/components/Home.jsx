import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const Home = () => {
    return (
        <div className=''>
           <Header></Header>
           <Search></Search>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;