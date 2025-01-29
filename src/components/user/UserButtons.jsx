import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { pageLinks } from '../../utils/constants';
import './styles.css';

export const UserButtons = () => {
    return (
        <>
            <div className="buttons-container">
                <div className="buttons-body">
                    <div className="buttons-item">
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 1</Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="buttons-item">
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 2</Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="buttons-item">
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 3</Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="buttons-item">
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 4</Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="buttons-item">
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 5</Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="buttons-item">
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="button-content button-outline">
                                <Link to={pageLinks.userPage}>Player 6</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
