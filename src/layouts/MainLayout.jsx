import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const MainLayout = () => {
    const location = useLocation();
    
    return (
        <div>
            <header>
                <Navbar></Navbar>
                {
                    location.pathname === '/' && <Banner></Banner>
                }
            </header>
            <main className='min-h-screen max-w-2xs md:max-w-2xl lg:max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;