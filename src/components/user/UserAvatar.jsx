import React, { useEffect, useState } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

export const UserAvatar = ({ avatarDetails, setAvatarDetails, onShowModal, userData }) => {

    const [avatarConfig, setAvatarConfig] = useState({ ...genConfig() });

    useEffect(() => {
        if (userData.userExist) {
            if (!userData.isPhoto) {
                setAvatarDetails(val => ({
                    ...val,
                    avatarConfig: {
                        ...userData.image,
                    },
                }));
    
                setAvatarConfig({...userData.image});
            } else {
                setAvatarDetails({
                    isPhoto: true,
                });
            }
        } else {
            setAvatarDetails(val => ({
                ...val,
                avatarConfig: {
                    ...avatarConfig,
                },
            }));
        }
    }, [userData]);

    const onChangeAvatar = () => {
        let newAvatar = genConfig();
        setAvatarConfig({
            ...newAvatar,
        });
        
        setAvatarDetails(val => ({
            ...val,
            avatarConfig: {
                ...newAvatar,
            },
        }));
    }

    return (
        <>
            <div className="user-avatar">
                {
                    avatarDetails.isPhoto
                        ? <div className="image-content">
                            <img src='https://placehold.co/500x800' />
                        </div>
                        : <>
                            <div className="avatar-figure">
                                <Avatar style={{ width: '200px', height: '200px' }} {...avatarConfig} />
                            </div>
                            <div className="button-section mt-3">
                                <div className="button-content">
                                    <button onClick={onChangeAvatar}>Change Avatar</button>
                                </div>
                            </div>
                            <div className="text-content">
                                <p className='my-3 text-center'>OR</p>
                            </div>
                            <div className="button-section">
                                <div className="button-content">
                                    <button onClick={onShowModal}>Take a photo</button>
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}
