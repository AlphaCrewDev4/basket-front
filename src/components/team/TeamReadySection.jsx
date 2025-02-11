import React, { useEffect, useState } from 'react';
import { CountdownSection } from '../countdown/CountdownSection';

export const TeamReadySection = () => {

    const [activeSection, setActiveSection] = useState('init');

    useEffect(() => {
        setTimeout(() => {
            setActiveSection('countdown');
        }, [2000]);
    }, []);

    return (
        <div className="init-game-content">
            <div className="init-game-item">
                <div className="init-game-title">
                    <img src='/images/team-green.png' />
                </div>
                <div className="init-game-team">
                    <img src='/images/team-1-green.png' />
                </div>
            </div>
            <div className="init-game-item">
                <div className="init-game-title">
                    <img src='/images/team-blue.png' />
                </div>
                <div className="init-game-team">
                    <img src='/images/team-2-blue.png' />
                </div>
            </div>
            <div className="section-absolute">
                {
                    activeSection == 'init'
                        ? <div className="vs-image">
                            <img src='/images/vs-icon.PNG' />
                        </div>
                        : activeSection == 'countdown'
                            ? <div className="countdown-section">
                                <CountdownSection
                                    setActiveSection={setActiveSection}
                                />
                            </div>
                            : <div className="fight-image">
                                <img src='/images/fight-icon.PNG' />
                            </div>
                }
            </div>
            <div className="square-absolute square-left"></div>
            <div className="square-absolute square-right"></div>
        </div>
    )
}
