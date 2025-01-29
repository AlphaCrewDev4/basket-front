import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { animationConfig, pageLinks } from '../../utils/constants';
import './styles.css';

export const InstructionSection = ({ instruction, increase, decrease, counter }) => {

    const [values, setValues] = useState(1);

    const onIncrease = () => {
        setValues(0);
        setTimeout(() => {
            increase();
            setValues(1);
        }, [1000]);
    }

    const onDecrease = () => {
        setValues(0);
        setTimeout(() => {
            decrease();
            setValues(1);
        }, [1000]);
    }

    return (
        <>
            <div
                className="instruction-content border-general-section"
            >
                <motion.div
                    animate={{ opacity: values }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='title-absolute'
                >
                    <div className="title-content">
                        <div className="title-2 text-center">
                            <h2>{instruction.title}</h2>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ opacity: values }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-content text-center">
                        <p>{instruction.text}</p>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ opacity: values }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', }}
                >
                    <div className="image-content animation-border">
                        <img src={instruction.image} />
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
                            counter > 0
                            && <div className="button-content button-left">
                                <button onClick={onDecrease}>{`<`}</button>
                            </div>
                        }
                        {
                            !instruction.last
                                ? <div className="button-content">
                                    <button onClick={onIncrease}>{`>`}</button>
                                </div>
                                : <div className="button-content">
                                    <Link to={pageLinks.configurationPlayerPage}>{`>`}</Link>
                                </div>
                        }
                    </div>

                </motion.div>
            </div>
        </>
    )
}
