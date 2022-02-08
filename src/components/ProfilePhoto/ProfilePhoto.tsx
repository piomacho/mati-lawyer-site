import React from 'react'; // we need this to make JSX compile
import { ProfilePhotoElement, ProfilePhotoWrapper } from './ProfilePhoto.style';

type CardProps = {
  title: string,
  paragraph: string
}

export const ProfilePhoto = () => {
    return (
        <ProfilePhotoWrapper>
            <ProfilePhotoElement />

        </ProfilePhotoWrapper>
    )
}
