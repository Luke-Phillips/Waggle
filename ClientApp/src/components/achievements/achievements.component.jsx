import React from 'react';
import './achievements.styles.scss';

const Achievements = props => {
  const achievements = props.achs.map(achievement => <li>achievement</li>);

  return <ul>{achievements}</ul>;
};

export default Achievements;
