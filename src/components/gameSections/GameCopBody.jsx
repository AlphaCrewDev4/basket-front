import React from 'react';
import { gameObjectCop } from '../../utils/constants';
import './styles.css';

export const GameCopBody = () => {
    return (
        <>
            <div className="game-card-body">
                <div className="game-card-item">
                    <div className="score-title">
                        <p>Score</p>
                    </div>
                    <div className="score-number">
                        <p>
                            {
                                gameObjectCop.score < 10
                                && '0'
                            }
                            {gameObjectCop.score}
                        </p>
                    </div>
                    <div className="team-images">
                        {
                            gameObjectCop.imagePlayers.map((image, i) => (
                                <div className="image-item" key={i}>
                                    <img src={image} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
