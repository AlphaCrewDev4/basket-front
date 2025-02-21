import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { pageLinks } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';
import './styles.css';

export const UserButtons = () => {

    const { usersData } = useContext(AppContext);

    const [buttonCounter, setButtonCounter] = useState(6);
    const [buttonsData, setButtonsData] = useState([]);

    useEffect(() => {
        generateButtons();
    }, []);

    const generateButtons = () => {
        let buttonsTemp = [];
        for (let i = 0; i < buttonCounter; i++) {
            let butttonName = `Add Player`;
            let userExist = false;

            if (usersData[`user${i}`]) {
                butttonName = usersData[`user${i}`].name;
                userExist = true;
            }

            let button = {
                id: i,
                butttonName,
                link: `${pageLinks.userPage}?user=${i}`,
                image: 'https://placehold.co/100x100',
                userExist,
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
                                        && <div className="button-image">
                                            <img src={item.image} />
                                        </div>
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
                    </motion.div>
                </div>
            </div>
        </>
    )
}
