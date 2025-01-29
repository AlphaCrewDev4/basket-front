import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import { useNavigate } from 'react-router';
import { AppLayout } from '../layouts';
import { animationConfig } from '../utils/constants';

export const HomePage = () => {

    let navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(0);
            setTimeout(() => {
                navigate('/ready');
            }, [2000]);
        }, [3000]);
    }, []);

    return (
        <AppLayout>
            <section className='principal-section'>
                <div
                    className="image-absolute image-left"
                >
                    <motion.div
                        animate={{ opacity: isVisible }}
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
                        animate={{ opacity: isVisible }}
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
                                    animate={{ opacity: isVisible }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    <div className="title-content">
                                        <div className="title-1 text-center">
                                            <h1 onClick={() => setIsVisible(1)}>Welcome</h1>
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
