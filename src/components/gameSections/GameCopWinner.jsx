import React from 'react';
import { Link } from 'react-router';
import { gameObjectCop, pageLinks } from '../../utils/constants';

export const GameCopWinner = () => {
    return (
        <>
            <div className={`winner-card-section`}>
                <div className="square-absolute square-left"></div>
                <div className="square-absolute square-right"></div>
                <div className="winner-card-body">
                    <div className="winner-card-score">
                        <p>Score</p>
                    </div>
                    <div className="winner-card-number">
                        <p>
                            {
                                gameObjectCop.score < 10
                                    ? `0${gameObjectCop.score}`
                                    : gameObjectCop.score
                            }
                        </p>
                    </div>
                    <div className="winner-card-players">
                        {
                            gameObjectCop.imagePlayers.map((image, i) => (
                                <div className="image-player" key={i}>
                                    <img src={image} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="button-section">
                        <div className="button-content">
                            <Link to={pageLinks.homePage}>Play Again</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
