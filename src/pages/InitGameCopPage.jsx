import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { TeamReadyCopSection } from '../components/team/TeamReadyCopSection';

export const InitGameCopPage = () => {

    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section
                    className='init-game-cop-section'
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
                                    <TeamReadyCopSection />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
