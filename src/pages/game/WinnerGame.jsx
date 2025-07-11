import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../../layouts';
import { GameCardWinner } from '../../components/gameSections/GameCardWinner';
import { ConfettiBg } from '../../components/animations/ConfettiBg';
import '../styles.css';

export const WinnerGame = () => {
    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <div className="animation-section">
                    <ConfettiBg />
                </div>
                <section className='winner-game-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ width: '100%' }}
                                >
                                    <GameCardWinner />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
