import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { InstructionSlider } from './InstructionSlider';
import { Link } from 'react-router';
import { pageLinks } from '../../utils/constants';

export const InstructionItem = ({ instruction }) => {

    const [activeItem, setActiveItem] = useState(instruction.types[0]);
    const [animationValue, setAnimationValue] = useState(1);

    useEffect(() => {
        setActiveItem(instruction.types[0]);
    }, [instruction]);

    const onChangeItem = ({ item }) => {
        setAnimationValue(0);
        setTimeout(() => {
            setActiveItem(item);
            setAnimationValue(1);
        }, [1000]);
    }

    return (
        <>
            <div className="instruction__options">
                {
                    instruction.types.map(item => (
                        <div className={
                            item.typeName == activeItem.typeName
                                ? 'instruction__option active'
                                : 'instruction__option'
                        }
                            key={item.typeName}
                            onClick={() => onChangeItem({ item })}
                        >
                            <p>{item.typeName}</p>
                        </div>
                    ))
                }
            </div>
            <div className="instruction__content">
                <div className="square-absolute square-left"></div>
                <div className="square-absolute square-right"></div>
                <motion.div
                    animate={{ opacity: animationValue }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', }}
                    className='instruction__slider'
                >
                    <InstructionSlider instructions={activeItem.instructions} />
                </motion.div>
                <div className="instruction__difficulty">
                    <div className="instruction__difficulty__content">
                        <p>Difficulty Level:</p>
                        <div className="button-content active">
                            <button>1</button>
                        </div>
                        <div className="button-content">
                            <button>1</button>
                        </div>
                        <div className="button-content">
                            <button>1</button>
                        </div>
                        <div className="button-content">
                            <button>1</button>
                        </div>
                        <div className="button-content">
                            <button>1</button>
                        </div>
                    </div>
                    <div className="button-content">
                        <Link to={pageLinks.playerPage}>Select</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
