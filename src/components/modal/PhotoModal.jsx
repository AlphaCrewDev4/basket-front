import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CountdownSection } from '../countdown/CountdownSection';
import './styles.css';
import { Link, useNavigate } from 'react-router';
import { pageLinks } from '../../utils/constants';
import { AppContext } from '../../context/AppContext';

export const PhotoModal = () => {

    const [modalShow, setModalShow] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [textError, setTextError] = useState('')

    const { usersData } = useContext(AppContext);
    let navigate = useNavigate();

    const onHide = () => {
        setModalShow(false);
    }

    const onShowModal = () => {
        setModalShow(true);
    }

    const onContinue = () => {
        let keys = Object.keys(usersData);
        if (keys.length < 2) {
            setTextError('You must enter two users');
            return;
        }
        navigate(pageLinks.selectTeamPage);
    }

    return (
        <>
            <div className="text-error text-center mt-3">
                <p>{textError}</p>
            </div>
            <div className="button-section mt-5">
                <div className="button-content">
                    <button onClick={onShowModal}>Open Modal</button>
                </div>
                <div className="button-content">
                    <button onClick={onContinue}>Continue</button>
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
