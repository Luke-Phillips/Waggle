import React, { useState } from 'react';
import Achievements from '../achievements/achievements.component';
import Badges from '../badges/badges.component';
import './unlockables.styles.scss';

const Unlockables = props => {
  const [unlockablesSelected, setUnlockablesSelected] = useState(
    'achievements'
  );

  const handleClick = e => {
    if (e.target.value != unlockablesSelected) {
      setUnlockablesSelected(e.target.value);
    }
  };

  const unlockablesToDisplay =
    unlockablesSelected == 'achievements' ? (
      <Achievements achs={props.achs} />
    ) : (
      <Badges badges={props.badges} />
    );

  return (
    <div>
      <button onClick={handleClick} value='achievements'>
        Achievements
      </button>
      <button onClick={handleClick} value='badges'>
        Badges
      </button>
      {unlockablesToDisplay}
    </div>
  );
};

export default Unlockables;
