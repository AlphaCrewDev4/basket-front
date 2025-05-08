import React from 'react';
import { Modal } from 'react-bootstrap';
import { CompetitiveSection } from '../gameOptions/CompetitiveSection';
import { CooperativeSection } from '../gameOptions/CooperativeSection';

export const GameTypeModal = ({ modalShow, onHide, activeOption }) => {
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={onHide}
            size="lg"
            className='modal-choose-game'
        >
            <Modal.Body>
                <div className="modal-game-content">
                    <div className="modal-game-body">
                        {
                            activeOption == 'Competitive'
                            && <CompetitiveSection />
                        }
                        {
                            activeOption == 'Cooperative'
                            && <CooperativeSection />
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
