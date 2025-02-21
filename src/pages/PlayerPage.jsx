import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { AppLayout } from '../layouts';
import { UserButtons } from '../components/user/UserButtons';
import { PhotoModal } from '../components/modal/PhotoModal';
import { pageLinks } from '../utils/constants';
import { AppContext } from '../context/AppContext';

export const PlayerPage = () => {

    const [textError, setTextError] = useState('')

    const { usersData } = useContext(AppContext);
    let navigate = useNavigate();

    const onContinue = () => {
        let keys = Object.keys(usersData);
        if (keys.length < 2) {
            setTextError('You must enter two players');
            return;
        }
        navigate(pageLinks.selectTeamPage);
    }

    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section className='player-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-general-section">
                                    <div className="square-absolute square-left"></div>
                                    <div className="square-absolute square-right"></div>
                                    <div className="general-button-back">
                                        <Link to={pageLinks.configurationPlayerPage}>
                                            <span>{`< `}</span>
                                            Go Back
                                        </Link>
                                    </div>
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

                                    <div className="text-error text-center mt-5">
                                        <p>{textError}</p>
                                    </div>
                                    <div className="button-section mt-5">
                                        <div className="button-content">
                                            <button onClick={onContinue}>Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
