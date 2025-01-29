import React, { useState } from 'react';
import { AppLayout } from '../layouts';
import { InstructionSection } from '../components/instructions';
import { instructionsList } from '../utils/constants';

export const InstructionPage = () => {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(val => val + 1);
    }

    const decrease = () => {
        if (counter == 0) return;
        setCounter(val => val - 1);
    }

    return (
        <AppLayout>
            <section className='principal-section second-bg'>
                <section className='instruction-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <InstructionSection
                                    instruction={instructionsList[counter]}
                                    counter={counter}
                                    increase={increase}
                                    decrease={decrease}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </AppLayout>
    )
}
