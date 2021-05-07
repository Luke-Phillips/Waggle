import React from 'react';
import Unlockables from '../../components/badges/badges.component';
import './profile-page.styles.scss';

const ProfilePage = () => (
  <div className='profile-board'>
    <Unlockables achs={[1, 2, 3]} badges={[4, 5, 6]} />
  </div>
);

export default ProfilePage;
