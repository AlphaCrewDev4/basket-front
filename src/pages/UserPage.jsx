import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router';
import { pageLinks } from '../utils/constants';
import { AppLayout } from '../layouts';
import { UserForm } from '../components/user/UserForm';
import { AppContext } from '../context/AppContext';
import { UserAvatar } from '../components/user/UserAvatar';
import './styles.css';

export const UserPage = () => {

    const [searchParams] = useSearchParams();
    const { usersData } = useContext(AppContext);
    const [userData, setUserData] = useState({});
    const [activeNumber, setActiveNumber] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [avatarDetails, setAvatarDetails] = useState({
        isPhoto: false,
    });

    useEffect(() => {
        let user = searchParams.get('user') || '0';
        if (usersData[`user${user}`]) {
            setUserData({
                ...usersData[`user${user}`],
                userId: `user${user}`,
                userExist: true,
                userPosition: usersData[`user${user}`].name,
            });

        } else {
            setUserData({
                userId: `user${user}`,
                userExist: false,
                userPosition: `${Number(user) + 1}`,
            });
        }
        setActiveNumber(Number(user));
    }, []);

    const onHide = () => {
        setModalShow(false);
    }

    const onShowModal = () => {
        setModalShow(true);
    }

    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section className='user-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-general-section">
                                    <div className="square-absolute square-left"></div>
                                    <div className="square-absolute square-right"></div>
                                    <div className="general-button-back">
                                        <Link to={pageLinks.playerPage}>
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
                                                <h2>PLayer {activeNumber + 1}
                                                </h2>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-5 d-flex justify-content-center align-items-center">
                                                <motion.div
                                                    animate={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    style={{ width: '100%', }}
                                                >
                                                    <UserAvatar
                                                        avatarDetails={avatarDetails}
                                                        setAvatarDetails={setAvatarDetails}
                                                        onShowModal={onShowModal}
                                                        userData={userData}
                                                    />
                                                </motion.div>
                                            </div>
                                            <div className="col-7 d-flex justify-content-center align-items-center">
                                                <UserForm
                                                    userData={userData}
                                                    modalShow={modalShow}
                                                    onHide={onHide}
                                                    avatarDetails={avatarDetails}
                                                    setAvatarDetails={setAvatarDetails}
                                                />
                                            </div>
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
