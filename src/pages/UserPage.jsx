import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { pageLinks } from '../utils/constants';
import './styles.css';
import { UserForm } from '../components/user/UserForm';

export const UserPage = () => {
    return (
        <AppLayout>
            <section className='principal-section'>
                <section className='user-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-general-section">
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                        className='title-absolute'
                                    >
                                        <div className="title-content">
                                            <div className="title-2 text-center">
                                                <h2>PLayer 1
                                                </h2>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 d-flex justify-content-center align-items-center">
                                                <motion.div
                                                    animate={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    style={{ width: '100%', }}
                                                >
                                                    <div className="image-content">
                                                        <img src='/images/player-1-sample.png' />
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className="col-7 d-flex justify-content-center align-items-center">
                                                <UserForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
