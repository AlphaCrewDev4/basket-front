import React from 'react';
import { gameObjectTeams } from '../../utils/constants';
import { GameCardItem } from './GameCardItem';
import './styles.css';

export const GameCardBody = () => {
    return (
        <>
            <div className="game-card-section">
                <div className="game-card-body">
                    {
                        gameObjectTeams.map(team => (
                            <GameCardItem
                                key={team.id}
                                team={team}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
