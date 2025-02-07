import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { pageLinks } from '../../utils/constants';
import './styles.css';

export const UserButtonsData = () => {
    return (
        <>
            <div className="buttons-container buttons-data">
                <div className="buttons-body">
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='buttons-body'
                    >
                        <div className="buttons-item">
                            <div className="button-image">
                                <img src='/images/team-green-1.png' />
                            </div>
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 1</Link>
                            </div>
                        </div>
                        <div className="buttons-item">
                            <div className="button-image">
                                <img src='/images/team-green-1.png' />
                            </div>
                            <div className="button-content button-outline">
                                <Link to={pageLinks.selectTeamPage}>Player 2</Link>
                            </div>
                        </div>
                        <div className="buttons-item">
                            <div className="button-image">
                                <img src='/images/team-green-1.png' />
                            </div>
                            <div className="button-content button-outline">
                                <Link to={pageLinks.preGamePage}>Player 3</Link>
                            </div>
                        </div>
                        <div className="buttons-item">
                            <div className="button-image">
                                <img src='/images/team-green-1.png' />
                            </div>
                            <div className="button-content button-outline">
                                <Link to={pageLinks.playerDataPage}>Player 4</Link>
                            </div>
                        </div>
                        <div className="buttons-item">
                            <div className="button-image">
                                <img src='/images/team-green-1.png' />
                            </div>
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 5</Link>
                            </div>
                        </div>
                        <div className="buttons-item">
                            <div className="button-image">
                                <img src='/images/team-green-1.png' />
                            </div>
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 6</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
