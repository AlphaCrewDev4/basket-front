import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { pageLinks } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';

export const CompetitiveSection = () => {

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
                    gameType: 'Competitive',
                    players: 2,
                }
                break;
            case 2:
                optionData = {
                    ...optionData,
                    gameType: 'Competitive',
                    players: 4,
                }
                break;
            default:
                optionData = {
                    ...optionData,
                    gameType: 'Competitive',
                    players: 2,
                }
                break;
        }

        setAppData({
            ...optionData,
        });

        navigate(pageLinks.configurationPlayerPage);
    }

    return (
        <div className="competitive-section">
            <div className="button-section">
                <button
                    onClick={() => onSelectOption(1)}
                >1 vs 1</button>
            </div>
            <div className="button-section mt-5">
                <button
                    onClick={() => onSelectOption(2)}
                >2 vs 2</button>
            </div>
        </div>
    )
}
