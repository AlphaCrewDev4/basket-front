import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CountdownSection } from '../countdown/CountdownSection';
import './styles.css';

export const PhotoModal = ({ setPlayerImage, userPosition, modalShow, onHide, setAvatarDetails }) => {

    const [isPlay, setIsPlay] = useState(false);

    const onGetImage = () => {
        setPlayerImage('https://placehold.co/200x200');
        setAvatarDetails({
            isPhoto: true,
        });
        onHide();
    }

    return (
        <>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={onHide}
                className='modal-photo'
                fullscreen
            >
                <Modal.Body>
                    <div className="modal-content">
                        <div className="modal-photo-body">
                            <div className="modal-photo-item">
                                <div className="modal-photo-title">
                                    <h2>{
                                        userPosition?.length < 2
                                            ? `Player ${userPosition}`
                                            : userPosition
                                    }</h2>
                                </div>
                            </div>
                            <div className="modal-photo-item">
                                <div className="modal-photo-image">
                                    <img src='/images/photo-test.PNG' />
                                </div>
                            </div>
                            <div className="modal-photo-item">
                                <div className="modal-photo-text text-center">
                                    <p>Click to <br /> Begin Countdown</p>
                                </div>
                                <div
                                    className="modal-photo-countdown"
                                    style={{ cursor: 'pointer', }}
                                    onClick={() => setIsPlay(true)}
                                >
                                    <CountdownSection
                                        isPlay={isPlay}
                                        onCompleteFn={onGetImage}
                                    />
                                </div>
                                <div className="modal-photo-icon">
                                    <img src='/images/hand-icon.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
