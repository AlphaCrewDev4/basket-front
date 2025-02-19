import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { pageLinks } from '../../utils/constants';
import './styles.css';

export const UserForm = () => {

    const [formOptions, setFormOptions] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [formError, setFormError] = useState({
        errorName: '',
        errorEmail: '',
        errorPhone: '',
    });

    const onInputChange = ({ target }) => {
        setFormOptions({
            ...formOptions,
            [target.name]: target.value,
        });
    }

    return (
        <>
            <div className="user-form-content">
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', }}
                >
                    <div className="text-content">
                        <p>Nice <br /> How should we call you?</p>
                    </div>
                    <div className="user-input mt-4">
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            id="name"
                            placeholder="Name"
                            value={formOptions.name}
                            onChange={onInputChange}
                        />
                        <span className='error-span'>{formError.errorName}</span>
                    </div>
                    <div className="user-input mt-4">
                        <input
                            type="text"
                            className="form-control"
                            name='email'
                            id="email"
                            placeholder="Email"
                            value={formOptions.email}
                            onChange={onInputChange}
                        />
                        <span className='error-span'>{formError.errorEmail}</span>
                    </div>
                    <div className="user-input mt-4">
                        <input
                            type="text"
                            className="form-control"
                            name='phone'
                            id="phone"
                            placeholder="Phone"
                            value={formOptions.phone}
                            onChange={onInputChange}
                        />
                        <span className='error-span'>{formError.errorPhone}</span>
                    </div>
                    <div className="user-input mt-4">
                        <label className="custom-checkbox scale yellow medium">
                            <input
                                type="checkbox"
                                id="check-agree"
                            />
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                                </svg>
                            </span>
                        </label>
                        <label htmlFor="check-agree" className="form-label ms-3">I agree to receive an email/sms with my video</label>
                    </div>
                    <div className="button-section pt-3 mt-5">
                        <div className="button-content button-left">
                            <Link to={pageLinks.playerPage}>Back</Link>
                        </div>
                        <div className="button-content">
                            <Link to={pageLinks.playerPage}>Save</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
