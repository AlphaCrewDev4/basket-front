import React from 'react';

export const AppLayout = ({ children }) => {
    return (
        <>
            <div className='container-fluid' style={{ padding: 0 }}>
                <div className='body' id='body'>
                    {children}
                </div>
            </div>
        </>
    )
}
