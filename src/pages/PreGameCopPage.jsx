import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { ConfirmationSection } from '../components/team/ConfirmationSection';
import { pageLinks } from '../utils/constants';
import { Link } from 'react-router';
import './styles.css';
import { ConfirmationCopSection } from '../components/team/ComfirmationCopSection';

export const PreGameCopPage = () => {
    return (
        <AppLayout>
            <section className='principal-section pre-game second-bg'>
                <section className='pre-game-cop-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-general-section">
                                    <div className="square-absolute square-left"></div>
                                    <div className="square-absolute square-right"></div>
                                    <div className="general-button-back">
                                        <Link to={pageLinks.playerPage}>
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
                                                <h2>Cop-Op Mode
                                                </h2>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <div className="text-content mb-3 text-center">
                                            <p>Players:</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                        style={{ width: '100%', }}
                                    >
                                        <ConfirmationCopSection />
                                    </motion.div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className='content-absolute mt-5'
                                    >
                                        <div className="button-section">
                                            <div className="button-content button-left">
                                                <Link to={pageLinks.playerPage}>Back</Link>
                                            </div>
                                            <div className="button-content">
                                                <Link to={pageLinks.initGamePageCop}>Ready</Link>
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
