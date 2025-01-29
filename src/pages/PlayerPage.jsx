import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { UserButtons } from '../components/user/UserButtons';

export const PlayerPage = () => {
    return (
        <AppLayout>
            <section className='principal-section'>
                <section className='player-section'>
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
                                                <h2>Choose Your <br />
                                                    Warrior Pose!
                                                </h2>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <div className="text-content text-center mb-5">
                                            <p>We'll use this photo for your player profile. Pick a player for strike a pose fo the camara!</p>
                                        </div>
                                    </motion.div>
                                    <UserButtons />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
