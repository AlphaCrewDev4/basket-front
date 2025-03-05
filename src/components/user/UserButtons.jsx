import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Avatar from 'react-nice-avatar';
import { motion } from 'motion/react';
import { pageLinks } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';
import './styles.css';

export const UserButtons = () => {

    const { usersData, appData } = useContext(AppContext);

    const [buttonCounter, setButtonCounter] = useState(1);
    const [buttonsData, setButtonsData] = useState([]);

    useEffect(() => {
        let userKeys = Object.keys(usersData);
        if (userKeys.length > 0) {
            setButtonCounter(userKeys.length);
        } else {
            if (appData.gameType == 'Co-op') {
                setButtonCounter(1);
            }

            if (appData.gameType == 'Competitive') {
                setButtonCounter(2);
            }
        }
    }, []);

    useEffect(() => {
        generateButtons();
    }, [buttonCounter]);

    const incrementPlayers = () => {
        setButtonCounter(val => val + 1);
    }

    const generateButtons = () => {
        let buttonsTemp = [];
        for (let i = 0; i < buttonCounter; i++) {
            let butttonName = `Add Player`;
            let userExist = false;
            let isPhoto = false;
            let userAvatar = 'https://placehold.co/100x100';

            if (usersData[`user${i}`]) {
                butttonName = usersData[`user${i}`].name;
                userExist = true;
                userAvatar = usersData[`user${i}`].image;
                if (usersData[`user${i}`].isPhoto) {
                    isPhoto = true;
                }
            }

            let button = {
                id: i,
                butttonName,
                link: `${pageLinks.userPage}?user=${i}`,
                image: userAvatar,
                userExist,
                isPhoto,
            }

            buttonsTemp = [...buttonsTemp, button];
        }
        setButtonsData([
            ...buttonsTemp,
        ]);
    }

    return (
        <>
            <div className="buttons-container buttons-data">
                <div className="buttons-body">
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='buttons-body'
                    >
                        {
                            buttonsData.map(item => (
                                <div className="buttons-item" key={item.id}>
                                    {
                                        item.userExist
                                        && (item.isPhoto
                                            ? <div className="button-image">
                                                <img src={item.image} />
                                            </div>
                                            : <div className="button-image">
                                                <Avatar style={{ width: '125px', height: '125px' }} {...item.image} />
                                            </div>)
                                    }
                                    <div className={
                                        !item.userExist
                                            ? 'button-content button-outline'
                                            : 'button-content'
                                    }>
                                        <Link to={item.link}>{item.butttonName}</Link>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            buttonCounter < 6
                            && <div className="buttons-item">
                                <div className="button-content button-outline">
                                    <button onClick={incrementPlayers}>+</button>
                                </div>
                            </div>
                        }
                    </motion.div>
                </div>
            </div>
        </>
    )
}
