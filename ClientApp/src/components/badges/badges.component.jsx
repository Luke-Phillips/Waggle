import React from 'react';
import './badges.styles.scss';

const Badges = props => {
  const badges = props.badges.map(badge => <li>badge</li>);

  return <div>{badges}</div>;
};

export default Badges;
