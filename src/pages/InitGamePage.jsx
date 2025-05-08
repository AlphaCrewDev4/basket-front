import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { TeamReadySection } from '../components/team/TeamReadySection';
import { ConfirmationSection } from '../components/team/ConfirmationSection';
import { pageLinks } from '../utils/constants';
import { Link } from 'react-router';
import { InitCountDown } from '../components/gameSections/InitCountDown';

export const InitGamePage = () => {

    return (
        <AppLayout>
            <section className='principal-section pre-game second-bg pt-0'>
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
                <section className='pre-game-section init-game-section'
                    style={{ height: '100%', }}
                >
                    <div className="container"
                        style={{ height: '100%', }}
                    >
                        <div className="row"
                            style={{ height: '100%', }}
                        >
                            <div className="col-12"
                                style={{ height: '100%', }}
                            >
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 2 }}
                                    style={{ width: '100%', height: '100%', }}
                                >
                                    <ConfirmationSection />
                                    <InitCountDown />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
