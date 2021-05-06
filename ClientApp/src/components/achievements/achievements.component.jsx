import React from 'react';
import './achievements.styles.scss';

const Achievements = props => {
  const achievements = props.achievements.map(achievement => (
    <li>achievement</li>
  ));

  return achievements;
};

export default Achievements;
