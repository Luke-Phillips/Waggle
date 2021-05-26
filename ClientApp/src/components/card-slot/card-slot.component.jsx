import React, { useState } from 'react';
import CardPicker from '../card-picker/card-picker.component';
import CardContainer from '../card-container/card-container.component';
import ProgressCard from '../../components/progress-card/progress-card.component';
import ProfileCard from '../../components/profile-card/profile-card.component';
import StatsCard from '../../components/stats-card/stats-card.component';
import HiveManagerCard from '../../components/hive-manager-card/hive-manager-card.component';
import './card-slot.styles.scss';

const CardSlot = props => {
  const pickCard = cardName => {
    if (cardName === 'profile') return <ProfileCard />;
    if (cardName === 'progress') return <ProgressCard />;
    if (cardName === 'stats') return <StatsCard />;
    if (cardName === 'hiveManager') return <HiveManagerCard />;
  };

  const [card, setCard] = useState(pickCard(props.defaultCard));

  const cardPickHandler = e => setCard(pickCard(e.target.value));

  return (
    <div className='cardSlot'>
      <CardPicker
        pickHandler={cardPickHandler}
        defaultCard={props.defaultCard}
      />
      <CardContainer>{card}</CardContainer>
    </div>
  );
};

export default CardSlot;
