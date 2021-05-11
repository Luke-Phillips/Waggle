import React from 'react';
import Points from '../points/points.component';
import Unlockables from '../unlockables/unlockables.component';
import './progress-card.styles.scss';


const ProgressCard = props => {
  // I imagine we'll get points from a fetch call within this component
  const points = 7;
  
  return (
    <>
      <Points points={points} />
      <Unlockables achs={[1, 2, 3]} badges={[4, 5, 6]} />
    </>
  );
};

export default ProgressCard;
