import React, { useContext, useEffect, useState } from 'react';
import Avatar from 'react-nice-avatar';
import { AppContext } from '../../context/AppContext';

export const ConfirmationCopSection = () => {

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
                team: usersData[user].team,
                isPhoto: usersData[user].isPhoto,
            }]
        }
        setUsers([
            ...usersTemp,
        ]);
    }, []);

    return (
        <div className="pre-game-body">
            {
                users.map(item => (
                    <div className="pre-game-item" key={item.id}>
                        <div className="pre-game-image">
                        {
                            item.isPhoto
                                ? <img src={item.image} />
                                : <Avatar style={{ width: '200px', height: '200px' }} {...item.image} />
                        }
                        </div>
                        <div className="pre-game-name">
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
