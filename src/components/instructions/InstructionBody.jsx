import React, { useState } from 'react';
import { motion } from 'motion/react';
import { instructionsListV2 } from '../../utils/constants';
import { InstructionItem } from './InstructionItem';

export const InstructionBody = () => {

    const [activeInstruction, setActiveInstruction] = useState(instructionsListV2[0]);
    const [animationValue, setAnimationValue] = useState(1);

    const onChangeInstruction = ({ instruction }) => {
        setAnimationValue(0);
        setTimeout(() => {
            setActiveInstruction(instruction);
            setAnimationValue(1);
        }, [1000]);
    }

    return (
        <div className="instruction__body">
            <div className="instruction__left">
                <div className="instruction__buttons">
                    {
                        instructionsListV2.map(item => (
                            <div className={
                                item.id == activeInstruction.id
                                    ? 'instruction__button active'
                                    : 'instruction__button'
                            } key={item.id}>
                                {
                                    item.comingSoon
                                        ? <button>Coming Soon</button>
                                        : <button
                                            onClick={() => onChangeInstruction({ instruction: item })}
                                        >{item.name}</button>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="instruction__right">
                <motion.div
                    animate={{ opacity: animationValue }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', }}
                    className='instruction__item'
                >
                    <InstructionItem instruction={activeInstruction} />
                </motion.div>
            </div>
        </div>
    )
}
