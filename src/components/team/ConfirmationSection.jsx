import React, { useContext, useEffect, useState } from 'react';
import { usersListTeam } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';

export const ConfirmationSection = () => {

    const { usersData } = useContext(AppContext);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let usersKeys = Object.keys(usersData);
        let usersTemp = [];
        for (const user of usersKeys) {
            usersTemp = [...usersTemp, {
                id: user,
                name: usersData[user].name,
                image: usersData[user].image || 'https://placehold.co/100x100',
                team: usersData[user].team
            }]
        }
        setUsers([
            ...usersTemp,
        ]);
    }, []);

    return (
        <div className="pre-game-body">
            <div className="pre-game-item">
                <div className="pre-game-image">
                    <img src='/images/team-green.png' />
                </div>
                <div className="pre-game-team">
                    {
                        users.map(item => (
                            item.team == 'Green'
                            && <div className="team-item green-team" key={item.id}>
                                <img src={item.image} alt={item.name} />
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
                        users.map(item => (
                            item.team == 'Blue'
                            && <div className="team-item blue-team" key={item.id}>
                                <img src={item.image} alt={item.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
