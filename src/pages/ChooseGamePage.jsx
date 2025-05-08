import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { GameTypeModal } from '../components/modal/GameTypeModal';
import { AppContext } from '../context/AppContext';

export const ChooseGamePage = () => {

    const { setUsersData } = useContext(AppContext);
    const [modalShow, setModalShow] = useState(false);
    const [activeOption, setActiveOption] = useState('Competitive');

    useEffect(() => {
        setUsersData({});
    }, []);

    const onShowModal = (active) => {
        setActiveOption(active);
        setModalShow(true);
    }

    const onHide = () => {
        setModalShow(false);
    }

    return (
        <AppLayout>
            <section className='principal-section'>
                <div
                    className="image-absolute image-left"
                >
                    <motion.div
                        animate={{ opacity: 1 }}
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
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <img src='/images/figure-right.png' />
                    </motion.div>
                </div>
                <div className="choose-game-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 2 }}
                                    style={{ width: '100%' }}
                                >
                                    <div className="title-content">
                                        <div className="title-1 text-center">
                                            <h1>Choose Game Mode</h1>
                                        </div>
                                    </div>
                                    <div className="button-section">
                                        <div className="button-content">
                                            <button onClick={() => onShowModal('Competitive')}>Competitive</button>
                                            <div className="text-content text-center">
                                                <p>1 vs 1 <span style={{ color: 'var(--primary)' }}>or</span> 2 vs 2</p>
                                            </div>
                                        </div>
                                        <div className="button-content">
                                            <button onClick={() => onShowModal('Cooperative')}>Cooperative</button>
                                            <div className="text-content text-center">
                                                <p>1 to 4 players</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <GameTypeModal
                    modalShow={modalShow}
                    onHide={onHide}
                    activeOption={activeOption}
                />
            </section>
        </AppLayout>
    )
}
