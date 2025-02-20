import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { InstructionSlider } from './InstructionSlider';
import { difficultiesList, pageLinks } from '../../utils/constants';
import { useNavigate } from 'react-router';
import { AppContext } from '../../context/AppContext';

export const InstructionItem = ({ instruction }) => {

    const { setAppData } = useContext(AppContext);
    let navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(instruction.types[0]);
    const [animationValue, setAnimationValue] = useState(1);
    const [difficulty, setDifficulty] = useState(1);

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

    const onSelectOption = () => {
        let activeData = {
            gameId: instruction.id,
            gameName: instruction.name,
            gameType: activeItem.typeName,
            gameDifficulty: difficulty,
        }

        setAppData(val => ({
            ...val,
            gameMode: activeData,
        }));

        navigate(pageLinks.configurationPlayerPage);
    }

    const onChangeDifficulty = (difficulty) => {
        setDifficulty(difficulty);
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
                        {
                            difficultiesList.map(item => (
                                <div className={
                                    item.id == difficulty
                                    ? 'button-content active'
                                    : 'button-content'
                                } key={item.id}>
                                    <button
                                        onClick={() => onChangeDifficulty(item.id)}
                                    >{item.name}</button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="button-content">
                        <button onClick={onSelectOption}>Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}
