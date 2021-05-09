import React from 'react';
import './achievements.styles.scss';

const Achievements = props => {
  // ! use better key later
  const achievements = props.achs.map((achievement, index) => (
    <li key={index}>achievement {index}</li>
  ));

  return <ul>{achievements}</ul>;
};

export default Achievements;
