import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { modeList, pageLinks } from '../../utils/constants';
import './styles.css';

export const ModeSection = ({ instruction, increase, decrease, counter }) => {

    const [values, setValues] = useState(1);
    const [activeMode, setActiveMode] = useState(0);
    const [activeItem, setActiveItem] = useState({
        id: 0,
        name: '',
        image: '',
        difficulties: []
    });
    useEffect(() => {
        setActiveItem({
            ...modeList[activeMode],
        });
    }, [activeMode]);

    const onClickItem = (itemId) => {
        setValues(0);
        setTimeout(() => {
            setActiveMode(itemId);
            decrease();
            setValues(1);
        }, [1000]);
    }

    return (
        <>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='title-absolute'
            >
                <div className="title-content">
                    <div className="title-2 text-center">
                        <h2>Choose Your Game Mode</h2>
                    </div>
                </div>
            </motion.div>
            <div
                className="mode-content"
            >
                <div className="mode-content-item">
                    <div className="mode-content-list">
                        {
                            modeList.map(item => (
                                <div
                                    className={
                                        item.id == activeItem.id
                                            ? 'list-item active'
                                            : 'list-item'
                                    }
                                    key={item.id}
                                    onClick={() => onClickItem(item.id)}
                                >
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mode-content-item item-second">
                    <div className="square-absolute square-left"></div>
                    <div className="square-absolute square-right"></div>
                    <motion.div
                        animate={{ opacity: values }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ width: '100%', }}
                    >
                        <div className="image-content animation-border">
                            <img src={activeItem.image} />
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: values }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="text-content text-center mt-5">
                            <p>Choose a Difficulty</p>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: values }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='content-absolute'
                    >
                        <div className="button-section">
                            {
                                activeItem.difficulties.map(item => (
                                    <div className="button-content" key={item}>
                                        <button>{item}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
