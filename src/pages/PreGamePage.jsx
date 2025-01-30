import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { ConfirmationSection } from '../components/team/ConfirmationSection';
import './styles.css';
import { pageLinks } from '../utils/constants';
import { Link } from 'react-router';

export const PreGamePage = () => {
    return (
        <AppLayout>
            <section className='principal-section pre-game second-bg'>
                <div
                    className="image-absolute image-left"
                >
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <img src='/images/form-green.png' />
                    </motion.div>
                </div>
                <div
                    className="image-absolute image-right"
                >
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <img src='/images/form-blue.png' />
                    </motion.div>
                </div>
                <section className='pre-game-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-general-section">
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                        style={{ width: '100%', }}
                                    >
                                        <ConfirmationSection />
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
                                                <Link to={pageLinks.playerPage}>Ready</Link>
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
