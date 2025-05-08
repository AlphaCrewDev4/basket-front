import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../../layouts';
import { GameCopWinner } from '../../components/gameSections/GameCopWinner';
import { ConfettiBg } from '../../components/animations/ConfettiBg';
import '../styles.css';

export const WinnerCopGame = () => {
    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <div className="animation-section">
                    <ConfettiBg />
                </div>
                <section className='winner-game-section winner-cop-game-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ width: '100%' }}
                                >
                                    <GameCopWinner />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
