import React, { useState } from 'react';
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

    const onInputChange = () => {}

    return (
        <>
            <div className="user-form-content">
                <div className="text-content">
                    <p>Nice <br /> How should we call you?</p>
                </div>
                <div className="user-input mt-3">
                    <label htmlFor="username" className="form-label">Name</label>
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
                <div className="user-input mt-3">
                    <label htmlFor="username" className="form-label">Email</label>
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
                <div className="user-input mt-3">
                    <label htmlFor="username" className="form-label">Phone</label>
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
            </div>
        </>
    )
}
