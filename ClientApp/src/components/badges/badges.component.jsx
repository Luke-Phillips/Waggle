import React from 'react';
import './badges.styles.scss';

const Badges = props => {
  // ! use better key later
  const badges = props.badges.map((badge, index) => (
    <li key={index}>badge {index}</li>
  ));

  return <ul>{badges}</ul>;
};

export default Badges;
