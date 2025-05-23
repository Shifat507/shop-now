import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='text-center space-y-5'>
                <h2 className='text-9xl font-bold'>Oops!</h2>
                <p className='text-3xl font-semibold'>404 - Page not found</p>
                <Link to='/' className="btn btn-neutral">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;