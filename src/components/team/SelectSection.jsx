import React, { useState } from 'react';
import { pageLinks, usersList } from '../../utils/constants';
import './styles.css';
import { Link } from 'react-router';

export const SelectSection = () => {

    const [users, setUsers] = useState([...usersList]);

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
                                    <img src={user.image} />
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
                <div className="button-section pt-3 mt-5">
                    <div className="button-content button-left">
                        <Link to={pageLinks.playerPage}>Back</Link>
                    </div>
                    <div className="button-content">
                        <Link to={pageLinks.playerPage}>Save</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
