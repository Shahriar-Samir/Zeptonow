import Sidebar from '@/components/sidebar';
import React from 'react';

const layout = ({children}) => {
    return (
        <main className='flex p-0'>
            <Sidebar/>
            {children}
        </main>
    );
};

export default layout;