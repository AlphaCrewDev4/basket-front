import React from 'react';
import { Route, Routes } from 'react-router';
import { pageLinks } from '../utils/constants';
import {
    ActionPage,
    BeforeGame,
    ConfigurationPLayer,
    DuringGame,
    HomePage,
    InitGameCopPage,
    InitGamePage,
    InstructionPage,
    InstructionPagev2,
    ModePage,
    PlayerDataPage,
    PlayerPage,
    PreGameCopPage,
    PreGamePage,
    SelectTeamPage,
    UserPage,
    WinnerGame
} from '../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={pageLinks.homePage} element={<HomePage />} />
            <Route path={pageLinks.ready} element={<ActionPage />} />
            <Route path={pageLinks.instructionPage} element={<InstructionPage />} />
            <Route path={pageLinks.instructionPageV2} element={<InstructionPagev2 />} />
            <Route path={pageLinks.playerPage} element={<PlayerPage />} />
            <Route path={pageLinks.configurationPlayerPage} element={<ConfigurationPLayer />} />
            <Route path={pageLinks.userPage} element={<UserPage />} />
            <Route path={pageLinks.selectTeamPage} element={<SelectTeamPage />} />
            <Route path={pageLinks.preGamePage} element={<PreGamePage />} />
            <Route path={pageLinks.preGamePageCop} element={<PreGameCopPage />} />
            <Route path={pageLinks.modePage} element={<ModePage />} />
            <Route path={pageLinks.playerDataPage} element={<PlayerDataPage />} />
            <Route path={pageLinks.initGamePage} element={<InitGamePage />} />
            <Route path={pageLinks.initGamePageCop} element={<InitGameCopPage />} />
            {/* Game Routes */}
            <Route path={pageLinks.beforeGame} element={<BeforeGame />} />
            <Route path={pageLinks.duringGame} element={<DuringGame />} />
            <Route path={pageLinks.winnerGame} element={<WinnerGame />} />
        </Routes>
    )
}
