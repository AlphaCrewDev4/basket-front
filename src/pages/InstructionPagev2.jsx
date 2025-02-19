import React from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { InstructionBody } from '../components/instructions';

export const InstructionPagev2 = () => {
    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section className='instruction__section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    style={{ width: '100%', }}
                                >
                                    <InstructionBody />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
