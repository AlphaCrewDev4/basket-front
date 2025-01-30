import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { SelectSection } from '../components/team/SelectSection';
import './styles.css';

export const SelectTeamPage = () => {
    return (
        <AppLayout>
            <section className='principal-section team-configuration second-bg'>
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
                <section className='team-configuration-section'>
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
                                        <SelectSection />
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
