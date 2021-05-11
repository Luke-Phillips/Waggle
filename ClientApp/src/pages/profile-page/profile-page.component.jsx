import React from 'react';
import CardSlot from '../../components/card-slot/card-slot.component';
import './profile-page.styles.scss';

const ProfilePage = () => (
  <div className='profile-board'>
    <CardSlot defaultCard='profile'/>
    <CardSlot defaultCard='progress'/>
    <CardSlot defaultCard='stats'/>
    {/* <CardContainer>
      <ProgressCard />
    </CardContainer>
    <CardContainer>
      <ProfileCard />
    </CardContainer> */}
  </div>
);

export default ProfilePage;
