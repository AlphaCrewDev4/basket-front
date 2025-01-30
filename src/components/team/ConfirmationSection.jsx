import React from 'react';
import { usersListTeam } from '../../utils/constants';

export const ConfirmationSection = () => {
    return (
        <div className="pre-game-body">
            <div className="pre-game-item">
                <div className="pre-game-image">
                    <img src='/images/team-green.png' />
                </div>
                <div className="pre-game-team">
                    {
                        usersListTeam.map(item => (
                            item.team == 'Green'
                            && <div className="team-item">
                                <img src={item.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pre-game-item">
                <div className="pre-game-image">
                    <img src='/images/team-blue.png' />
                </div>
                <div className="pre-game-team">
                    {
                        usersListTeam.map(item => (
                            item.team == 'Blue'
                            && <div className="team-item">
                                <img src={item.image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
