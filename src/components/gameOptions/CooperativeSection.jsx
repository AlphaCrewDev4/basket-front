import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { pageLinks } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';

export const CooperativeSection = () => {

    const { setAppData } = useContext(AppContext);
    let navigate = useNavigate();

    const onSelectOption = (option) => {
        let optionData = {
            gameId: 1,
            gameName: 'HoopX',
            gameDifficulty: 1,
        };

        switch (option) {
            case 1:
                optionData = {
                    ...optionData,
                    gameType: 'Co-op',
                    players: 1,
                }
                break;
            case 2:
                optionData = {
                    ...optionData,
                    gameType: 'Co-op',
                    players: 2,
                }
                break;
            case 3:
                optionData = {
                    ...optionData,
                    gameType: 'Co-op',
                    players: 3,
                }
                break;
            case 4:
                optionData = {
                    ...optionData,
                    gameType: 'Co-op',
                    players: 4,
                }
                break;

            default:
                optionData = {
                    ...optionData,
                    gameType: 'Co-op',
                    players: 1,
                }
                break;
        }

        setAppData({
            ...optionData,
        });

        navigate(pageLinks.configurationPlayerPage);
    }

    return (
        <div className="cooperative-section">
            <div className="title-content mb-5">
                <div className="title-2 text-center">
                    <h2>Number of Players</h2>
                </div>
            </div>
            <div className="cooperative-buttons">
                <div className="button-content">
                    <button
                        onClick={() => onSelectOption(1)}
                    >1</button>
                </div>
                <div className="button-content">
                    <button
                        onClick={() => onSelectOption(2)}
                    >2</button>
                </div>
                <div className="button-content">
                    <button
                        onClick={() => onSelectOption(3)}
                    >3</button>
                </div>
                <div className="button-content">
                    <button
                        onClick={() => onSelectOption(4)}
                    >4</button>
                </div>
            </div>
        </div>
    )
}
