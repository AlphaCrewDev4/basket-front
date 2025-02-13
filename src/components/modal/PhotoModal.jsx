import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CountdownSection } from '../countdown/CountdownSection';
import './styles.css';

export const PhotoModal = () => {

    const [modalShow, setModalShow] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const onHide = () => {
        setModalShow(false);
    }

    const onShowModal = () => {
        setModalShow(true);
    }

    return (
        <>
            <div className="button-section mt-5">
                <div className="button-content">
                    <button onClick={onShowModal}>Open Modal</button>
                </div>
            </div>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={onHide}
                className='modal-xl modal-photo'
            >
                <Modal.Body>
                    <div className="modal-content">
                        <div className="modal-photo-body">
                            <div className="modal-photo-item">
                                <div className="modal-photo-title">
                                    <h2>Player 1</h2>
                                </div>
                            </div>
                            <div className="modal-photo-item">
                                <div className="modal-photo-image">
                                    <img src='/images/photo-test.PNG' />
                                </div>
                            </div>
                            <div className="modal-photo-item">
                                <div className="modal-photo-text text-center">
                                    <p>Begin <br /> Countdown </p>
                                </div>
                                <div className="modal-photo-countdown">
                                    <CountdownSection setActiveSection={setActiveSection} />
                                </div>
                                <div className="modal-photo-icon">
                                    <img src='/images/icon-test.PNG' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
