import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Avatar from 'react-nice-avatar';
import { pageLinks } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';
import './styles.css';

export const SelectSection = () => {

    const { usersData, setUsersData } = useContext(AppContext);
    let navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [teamError, setTeamError] = useState('');

    useEffect(() => {
        let usersKeys = Object.keys(usersData);
        let usersTemp = [];
        for (const user of usersKeys) {
            usersTemp = [...usersTemp, {
                id: user,
                name: usersData[user].name,
                image: usersData[user].image || 'https://placehold.co/100x100',
                team: usersData[user].team || '',
                isPhoto: usersData[user].isPhoto,
            }]
        }
        setUsers([
            ...usersTemp,
        ]);
    }, []);

    const onAddTeam = ({ userId, team }) => {
        setUsers(val => (val.map(item => {
            if (item.id == userId) {
                let teamName = '';
                if (item.team && item.team.length > 1) {
                    teamName = '';
                } else {
                    teamName = team;
                }
                return {
                    ...item,
                    team: teamName,
                };
            }
            return item;
        })));
    }

    const onSaveTeam = () => {
        let hasErrorTeam = {
            team: false,
            green: true,
            blue: true,
        }

        for (const user of users) {
            if (!user.team || user.team.length < 1) {
                hasErrorTeam.team = true;
            }

            if (user.team == 'Green') {
                hasErrorTeam.green = false;
            }

            if (user.team == 'Blue') {
                hasErrorTeam.blue = false;
            }
        }

        if (hasErrorTeam.team) {
            setTeamError('All players must select a team');
            return;
        }

        if (hasErrorTeam.green) {
            setTeamError('The green team must have at least one player');
            return;
        }

        if (hasErrorTeam.blue) {
            setTeamError('The blue team must have at least one player');
            return;
        }

        setTeamError('');

        for (const user of users) {
            if (!user.team || user.team.length < 1) {
                hasErrorTeam.team = true;
            }

            setUsersData(val => ({
                ...val,
                [user.id]: {
                    ...val[user.id],
                    team: user.team,
                }
            }));
        }

        navigate(pageLinks.preGamePage);
    }

    return (
        <>
            <div className="select-team-body">
                <div className="team-image team-green">
                    <img src="/images/team-green.png" />
                </div>
                <div className="team-image team-blue">
                    <img src="/images/team-blue.png" />
                </div>
                {
                    users.map(user => (
                        <div
                            className={
                                !user.team
                                    ? 'select-team-item'
                                    : user.team == 'Green'
                                        ? 'select-team-item team-green'
                                        : user.team == 'Blue'
                                        && 'select-team-item team-blue'
                            }
                            key={user.id}
                        >
                            <div className="select-team-content">
                                <div className="select-team-image">
                                    {
                                        user.isPhoto
                                        ? <img src={user.image} />
                                        : <Avatar style={{ width: '125px', height: '125px' }} {...user.image} />
                                    }
                                </div>
                                <div className="select-team-name">
                                    {user.name}
                                </div>
                                <div
                                    className="arrow-absolute arrow-left"
                                    onClick={() => onAddTeam({ userId: user.id, team: 'Green' })}
                                >
                                    <img src='/images/arrow-left.png' />
                                </div>
                                <div
                                    className="arrow-absolute arrow-right"
                                    onClick={() => onAddTeam({ userId: user.id, team: 'Blue' })}
                                >
                                    <img src='/images/arrow-right.png' />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="text-content text-center mt-4">
                    <p>{teamError}</p>
                </div>
                <div className="button-section pt-3 mt-5">
                    <div className="button-content button-left">
                        <Link to={pageLinks.playerPage}>Back</Link>
                    </div>
                    <div className="button-content">
                        <button
                            onClick={onSaveTeam}
                        >Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
