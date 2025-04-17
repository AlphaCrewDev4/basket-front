import React from 'react';
import { gameWinnerTeam, pageLinks } from '../../utils/constants';
import { Link } from 'react-router';

export const GameCardWinner = () => {
    return (
        <>
            <div className={`winner-card-section ${gameWinnerTeam.teamClassName}`}>
                <div className="square-absolute square-left"></div>
                <div className="square-absolute square-right"></div>
                <div className="winner-card-body">
                    <div className="winner-card-image">
                        <img src='/images/crown-image.png' />
                    </div>
                    <div className="winner-card-title">
                        <div className="title-content">
                            <div className="title-1">
                                <h1>Team {gameWinnerTeam.teamName} Wins!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="winner-card-score">
                        <p>Score</p>
                    </div>
                    <div className="winner-card-number">
                        <p>
                            {
                                gameWinnerTeam.score < 10
                                    ? `0${gameWinnerTeam.score}`
                                    : gameWinnerTeam.score
                            }
                        </p>
                    </div>
                    <div className="winner-card-players">
                        {
                            gameWinnerTeam.imagePlayers.map((image, i) => (
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
