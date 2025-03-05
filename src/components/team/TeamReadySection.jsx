import React, { useEffect, useState } from 'react';
import { CountdownSection } from '../countdown/CountdownSection';

export const TeamReadySection = () => {

    const [activeSection, setActiveSection] = useState('init');

    const changeState = () => {
        setActiveSection('fight');
    }

    useEffect(() => {
        setTimeout(() => {
            setActiveSection('countdown');
        }, [2000]);
    }, []);

    return (
        <div className="init-game-content">
            <div className="init-game-item">
                <div className="init-game-team">
                    <img src='/images/team-1-green.png' />
                </div>
            </div>
            <div className="init-game-item cop-mode">
                {
                    activeSection == 'init'
                        ? <div className="title-content">
                            <div className="title-2">
                                <h2>Ready?</h2>
                            </div>
                        </div>
                        : activeSection == 'countdown'
                            ? <div className="countdown-section">
                                <CountdownSection
                                    onCompleteFn={changeState}
                                />
                            </div>
                            : <div className="title-content">
                                <div className="title-2">
                                    <h2>Go</h2>
                                </div>
                            </div>
                }
            </div>
            <div className="square-absolute square-left"></div>
            <div className="square-absolute square-right"></div>
        </div>
    )
}
