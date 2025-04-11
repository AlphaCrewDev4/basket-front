import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../../layouts';
import { CountdownTimer } from '../../components/countdown/CountdownTimer';
import { GameCardBody } from '../../components/gameSections/GameCardBody';
import '../styles.css';

export const DuringGame = () => {
    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section className='during-game-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ width: '100%' }}
                                >
                                    <GameCardBody />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="timer">
                        <CountdownTimer />
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
