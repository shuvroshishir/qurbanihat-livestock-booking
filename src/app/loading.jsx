import React from 'react';
import { MoonLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex-center h-[50vh]'>
            <MoonLoader color="#064E3B" />
        </div>
    );
};

export default loading;


