import React, { useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {

    const [appData, setAppData] = useState({});
    const [usersData, setUsersData] = useState({});

    return (
        <AppContext.Provider value={{
            appData,
            usersData,
            setAppData,
            setUsersData,
        }}>
            {children}
        </AppContext.Provider>
    )
}
