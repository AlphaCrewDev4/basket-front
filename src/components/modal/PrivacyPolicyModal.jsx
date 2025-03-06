import React from 'react';
import { Modal } from 'react-bootstrap';
import { ConsentPage, PrivacyPage, TermsPage } from '../PlayerTerms';
import './styles.css';

export const PrivacyPolicyModal = ({ modalShow, onHide, typeUserPolicy }) => {

    return (
        <>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={onHide}
                className='modal-xl'
            >
                <Modal.Body>
                    <div className="modal-content">
                        {
                            typeUserPolicy == 'Terms'
                            && <TermsPage />
                        }
                        {
                            typeUserPolicy == 'Privacy'
                            && <PrivacyPage />
                        }
                        {
                            typeUserPolicy == 'Consent'
                            && <ConsentPage />
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
