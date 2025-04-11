import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../../layouts';
import { CountdownTimer } from '../../components/countdown/CountdownTimer';
import '../styles.css';

export const BeforeGame = () => {
    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section
                    className='before-game-section'
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ width: '100%' }}
                                >
                                    <div className="init-text text-center">
                                        <p>
                                            The ultimate
                                            <br />
                                            challenge awaits...
                                        </p>
                                    </div>
                                    <div className="title-content">
                                        <div className="title-1 text-center">
                                            <h1>
                                                Are You
                                                <br />
                                                Up for It?
                                            </h1>
                                        </div>
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
