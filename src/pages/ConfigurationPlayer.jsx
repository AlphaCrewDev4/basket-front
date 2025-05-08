import React, { useContext } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { pageLinks } from '../utils/constants';
import { AppContext } from '../context/AppContext';
import './styles.css';

export const ConfigurationPLayer = () => {

    const { appData } = useContext(AppContext);

    console.log(appData);

    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section className='configuration-player-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-general-section">
                                    <div className="square-absolute square-left"></div>
                                    <div className="square-absolute square-right"></div>
                                    <div className="general-button-back">
                                        <Link to={pageLinks.chooseGame}>
                                            <span>{`< `}</span>
                                            Go Back
                                        </Link>
                                    </div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                        className='title-absolute'
                                    >
                                        <div className="title-content">
                                            <div className="title-2 text-center">
                                                <h2>READY FOR THE GAME?
                                                </h2>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                                <motion.div
                                                    animate={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 2 }}
                                                >
                                                    <div className="text-content text-center">
                                                        <p>But before you jump in, let’s set up your player profile so we can 
                                                        personalize your experience!</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
                                                <motion.div
                                                    animate={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 2 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    <div className="image-content">
                                                        <img src='/images/team.png' />
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className='content-absolute'
                                    >
                                        <div className="button-section">
                                            <div className="button-content">
                                                <Link to={pageLinks.playerPage}>Set up profile</Link>
                                            </div>
                                        </div>

                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
