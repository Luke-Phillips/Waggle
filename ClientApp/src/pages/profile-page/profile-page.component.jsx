import React from 'react';
import CardContainer from '../../components/card-container/card-container.component';
import ProgressCard from '../../components/progress-card/progress-card.component';
import ProfileCard from '../../components/profile-card/profile-card.component';
import './profile-page.styles.scss';

const ProfilePage = () => (
  <div className='profile-board'>
    <CardContainer>
      <ProgressCard />
    </CardContainer>
    <CardContainer>
      <ProfileCard />
    </CardContainer>
  </div>
);

export default ProfilePage;
