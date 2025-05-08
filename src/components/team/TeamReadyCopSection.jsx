import React, { useContext, useEffect, useState } from 'react';
import Avatar from 'react-nice-avatar';
import { CountdownSection } from '../countdown/CountdownSection';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router';
import { pageLinks } from '../../utils/constants';

export const TeamReadyCopSection = () => {

    const { usersData } = useContext(AppContext);
    const [activeSection, setActiveSection] = useState('init');
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();

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

    useEffect(() => {
        setTimeout(() => {
            setActiveSection('countdown');
        }, [2000]);
    }, []);

    const changeState = () => {
        setActiveSection('fight');
        setTimeout(() => {
            navigate(pageLinks.duringCopGame);
        }, 4000);
    }

    return (
        <div className="init-game-content">
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
                        </div>
                    ))
                }
            </div>
            <div className="section-absolute cop-mode">
                {
                    activeSection == 'init'
                        ? <div className="vs-image">
                            <img src='/images/vs-icon.PNG' />
                        </div>
                        : activeSection == 'countdown'
                            ? <div className="countdown-section">
                                <CountdownSection
                                    onCompleteFn={changeState}
                                />
                            </div>
                            : <div className="fight-image">
                                <img src='/images/fight-icon.PNG' />
                            </div>
                }
            </div>
        </div>
    )
}
