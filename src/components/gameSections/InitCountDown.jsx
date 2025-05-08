import React, { useEffect, useState } from 'react';
import { CountdownSection } from '../countdown/CountdownSection';
import { useNavigate } from 'react-router';
import { pageLinks } from '../../utils/constants';

export const InitCountDown = () => {

    const [activeSection, setActiveSection] = useState('init');
    let navigate = useNavigate();

    const changeState = () => {
        setActiveSection('fight');
        setTimeout(() => {
            navigate(pageLinks.duringGame);
        }, 4000);
    }

    useEffect(() => {
        setTimeout(() => {
            setActiveSection('countdown');
        }, [2000]);
    }, []);

    return (
        <div className="init-game-content">
            <div className="section-absolute">
                {
                    activeSection == 'init'
                        ? <div className="vs-image">
                            <img src='/images/vs-icon.PNG' />
                        </div>
                        : activeSection == 'countdown'
                            ? <div className="countdown-section">
                                <CountdownSection
                                    onCompleteFn={changeState}
                                />
                            </div>
                            : <div className="fight-image">
                                <img src='/images/fight-icon.PNG' />
                            </div>
                }
            </div>
        </div>
    )
}
