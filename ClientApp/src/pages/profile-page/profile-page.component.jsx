import React from 'react';
import CardContainer from '../../components/card-container/card-container.component';
import ProgressCard from '../../components/progress-card/progress-card.component';
import './profile-page.styles.scss';

const ProfilePage = () => (
  <div className='profile-board'>
  <CardContainer>
    <ProgressCard />
  </CardContainer>
  </div>
);

export default ProfilePage;
