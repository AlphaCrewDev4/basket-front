import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import { pageLinks } from '../../utils/constants';
import { validateEmail, validatePhone } from '../helpers/validateFunctions';
import { AppContext } from '../../context/AppContext';
import './styles.css';
import { PhotoModal } from '../modal/PhotoModal';
import { PrivacyPolicyModal } from '../modal/PrivacyPolicyModal';

export const UserForm = ({ userData, modalShow, onHide, avatarDetails, setAvatarDetails }) => {

    const { usersData, setUsersData } = useContext(AppContext);
    const [privacyModalShow, setPrivacyModalShow] = useState(false);
    let navigate = useNavigate();

    const [playerImage, setPlayerImage] = useState('');
    const [formOptions, setFormOptions] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [checkValues, setCheckValues] = useState({
        email: false,
        phone: false,
        privacy: false,
        consent: false,
        agree: false,
    });

    const [formError, setFormError] = useState({
        errorName: '',
        errorEmail: '',
        errorPhone: '',
        errorPrivacy: '',
    });

    useEffect(() => {
        if (userData.userExist) {
            setFormOptions({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                checked: userData.checked,
            });

            setCheckValues({
                ...userData.checkValues,
            });
        }
    }, [userData]);

    const onInputChange = ({ target }) => {
        setFormOptions(val => ({
            ...val,
            [target.name]: target.value,
        }));
    }

    const onCheckChange = ({ target }) => {
        setCheckValues(val => ({
            ...val,
            [target.name]: target.checked,
        }));
    }

    const resetFormError = () => {
        setFormError({
            errorName: '',
            errorEmail: '',
            errorPhone: '',
            errorPrivacy: '',
        });
    }

    const onFormSubmit = () => {
        resetFormError();
        console.log(checkValues);
        let hasError = false;
        let validateFormPhone = validatePhone(formOptions.phone);
        let validateFormEmail = validateEmail(formOptions.email);

        if (formOptions.name.length < 2 || formOptions.name.length > 15) {
            setFormError(val => ({
                ...val,
                errorName: 'Please enter your name to proceed',
            }));
            hasError = true;
        }

        if (checkValues.phone) {
            if (!validateFormPhone) {
                setFormError(val => ({
                    ...val,
                    errorPhone: formOptions.phone.length == 0 ? 'Please enter your phone to proceed' : 'Please enter a valid phone number',
                }));
                hasError = true;
            }
        }

        if (checkValues.email) {
            if (!validateFormEmail) {
                setFormError(val => ({
                    ...val,
                    errorEmail: formOptions.email.length == 0 ? 'Please enter your email to proceed' : 'Please enter a valid email',
                }));
                hasError = true;
            }
        }

        if (!checkValues.privacy) {
            setFormError(val => ({
                ...val,
                errorPrivacy: 'You must accept the terms and conditions',
            }));
            hasError = true;
        }

        if (hasError) {
            return;
        }

        let userAvatar = {};

        if (avatarDetails.isPhoto) {
            userAvatar = {
                isPhoto: true,
                image: playerImage,
            }
        } else {
            userAvatar = {
                isPhoto: false,
                image: { ...avatarDetails.avatarConfig },
            }
        }

        setUsersData(val => ({
            ...val,
            [userData.userId]: {
                ...val[userData.userId],
                ...formOptions,
                ...userAvatar,
                checkValues,
            }
        }));

        navigate(pageLinks.playerPage);
    }

    const onDeletePlayer = () => {
        const usersKeys = Object.keys(usersData);
        const playerFilter = usersKeys.filter(item => item != userData.userId);
        let playerTemp = {};
        for (const item of playerFilter) {
            playerTemp = {
                ...playerTemp,
                [item]: {
                    ...usersData[item],
                }
            };
        }
        setUsersData({
            ...playerTemp
        });
        navigate(pageLinks.playerPage);
    }

    const onHidePrivacyModal = () => {
        setPrivacyModalShow(false);
    }

    const onShowPrivacylModal = () => {
        setPrivacyModalShow(true);
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
                        <label className="custom-checkbox scale yellow medium">
                            <input
                                type="checkbox"
                                id="check-email"
                                name='email'
                                onChange={onCheckChange}
                                checked={checkValues.email}
                            />
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                                </svg>
                            </span>
                        </label>
                        <label htmlFor="check-email" className="form-label ms-3">I agree that my email is used</label>
                    </div>
                    {
                        checkValues.email
                        && <div className="user-input mt-4">
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
                    }
                    <div className="user-input mt-4">
                        <label className="custom-checkbox scale yellow medium">
                            <input
                                type="checkbox"
                                id="check-phone"
                                name='phone'
                                onChange={onCheckChange}
                                checked={checkValues.phone}
                            />
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                                </svg>
                            </span>
                        </label>
                        <label htmlFor="check-phone" className="form-label ms-3">I agree that my phone is used</label>
                    </div>
                    {
                        checkValues.phone
                        && <div className="user-input mt-4">
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
                    }
                    <div className="user-input mt-4">
                        <label className="custom-checkbox scale yellow medium">
                            <input
                                type="checkbox"
                                id="check-privacy"
                                name='privacy'
                                onChange={onCheckChange}
                                checked={checkValues.privacy}
                            />
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                                </svg>
                            </span>
                        </label>
                        <label htmlFor="check-privacy" className="form-label ms-3">I agree to the <button className='button-link' onClick={onShowPrivacylModal}>Privacy Policy</button> and the Terms and Conditions</label>
                    </div>
                    <div className="user-input mt-4">
                        <label className="custom-checkbox scale yellow medium">
                            <input
                                type="checkbox"
                                id="check-consent"
                                name='consent'
                                onChange={onCheckChange}
                                checked={checkValues.consent}
                            />
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                                </svg>
                            </span>
                        </label>
                        <label htmlFor="check-consent" className="form-label ms-3">I agree to the use of my record to create a personalized video.</label>
                    </div>
                    <div className="user-input mt-4">
                        <label className="custom-checkbox scale yellow medium">
                            <input
                                type="checkbox"
                                id="check-agree"
                                name='agree'
                                onChange={onCheckChange}
                                checked={checkValues.agree}
                            />
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                                </svg>
                            </span>
                        </label>
                        <label htmlFor="check-agree" className="form-label ms-3">I agree to receive an email/sms with my video</label>
                        <p className='mt-3'>
                            <span className='error-span'>{formError.errorPrivacy}</span>
                        </p>
                    </div>
                    <div className="button-section pt-3 mt-5">
                        <div className="button-content button-left">
                            <button
                                onClick={onFormSubmit}
                            >Save</button>
                        </div>
                        {
                            userData.userExist
                            && <div className="button-content">
                                <button onClick={onDeletePlayer}>Delete</button>
                            </div>
                        }
                    </div>
                </motion.div>
            </div>
            <PhotoModal
                setPlayerImage={setPlayerImage}
                userPosition={userData.userPosition}
                modalShow={modalShow}
                onHide={onHide}
                setAvatarDetails={setAvatarDetails}
            />
            <PrivacyPolicyModal
                onHide={onHidePrivacyModal}
                modalShow={privacyModalShow}
            />
        </>
    )
}
