import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
const ErrorPage = () => {
    return (
        <div className='flex h-[100vh] justify-center items-center gap-3'>
            <ExclamationCircleIcon className='h-12 w-12 text-red-600'></ExclamationCircleIcon>
            <h1 className='text-5xl font-semibold'>404 Not Found!</h1>
        </div>
    );
};

export default ErrorPage;