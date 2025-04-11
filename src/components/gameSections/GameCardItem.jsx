import React from 'react';

export const GameCardItem = ({ team }) => {
    return (
        <>
            <div className={`game-card-item ${team.teamClassName}`}>
                <div className="team-image">
                    <img src={team.teamImage} />
                </div>
                <div className="score-title">
                    <p>Score</p>
                </div>
                <div className="score-number">
                    <p>
                        {
                            team.score < 10
                            && '0'
                        }
                        {team.score}
                    </p>
                </div>
                <div className="team-images">
                    {
                        team.imagePlayers.map((image, i) => (
                            <div className="image-item" key={i}>
                                <img src={image} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
