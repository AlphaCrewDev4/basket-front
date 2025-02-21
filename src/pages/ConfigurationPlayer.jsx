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
                                        <Link to={pageLinks.instructionPageV2}>
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
                                                <h2>We'd like to take a photo of each player for their game profile
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
                                                        <p className='mb-5'>We can also send you a personalized video of the match!</p>
                                                        <p>We just need your email/phone number</p>
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
                                                <Link to={pageLinks.initGamePage}>Skip</Link>
                                            </div>
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
