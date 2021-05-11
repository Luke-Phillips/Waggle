import React from 'react';
import ProfileImage from '../profile-image/profile-image.component';
import ProfileInfo from '../profile-info/profile-info.component';
import './profile-card.styles.scss';

const ProfileCard = props => (
  // not sure if fetch call will be done in the card or if user info will be passed as props yet
  // for now, it's hardcoded
    <>
      <ProfileImage />
      <ProfileInfo
        name='John Smith'
        displayName='Johnny'
        email='johnsmith@byui.edu'
      />
    </>
);

export default ProfileCard;
