import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';
import { AppLayout } from '../layouts';
import { animationConfig, pageLinks } from '../utils/constants';

export const ActionPage = () => {
    return (
        <AppLayout>
        <section className='principal-section'>
            <div
                className="image-absolute image-left"
            >
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                >
                    <img src='/images/figure-left.png' />
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
                    <img src='/images/figure-right.png' />
                </motion.div>
            </div>
            <section
                className='welcome-section'
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 2 }}
                            >
                                <div className="title-content">
                                    <div className="title-1 text-center">
                                        <h1>Ready</h1>
                                    </div>
                                </div>
                                <div className="title-content">
                                    <div className="title-2 text-center">
                                        <h2 style={{ lineHeight: '0.5em', }}>For</h2>
                                    </div>
                                </div>
                                <div className="title-content">
                                    <div className="title-1 text-center">
                                        <h1>Action?</h1>
                                    </div>
                                </div>
                                <div className="button-content text-center mt-5">
                                    <Link to={pageLinks.instructionPageV2}>Choose Game Mode</Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </AppLayout>
    )
}
