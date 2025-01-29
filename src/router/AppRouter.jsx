import React from 'react';
import { Route, Routes } from 'react-router';
import { pageLinks } from '../utils/constants';
import {
    ActionPage,
    ConfigurationPLayer,
    HomePage,
    InstructionPage,
    PlayerPage,
    UserPage
} from '../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={pageLinks.homePage} element={<HomePage />} />
            <Route path={pageLinks.ready} element={<ActionPage />} />
            <Route path={pageLinks.instructionPage} element={<InstructionPage />} />
            <Route path={pageLinks.playerPage} element={<PlayerPage />} />
            <Route path={pageLinks.configurationPlayerPage} element={<ConfigurationPLayer />} />
            <Route path={pageLinks.userPage} element={<UserPage />} />
        </Routes>
    )
}
