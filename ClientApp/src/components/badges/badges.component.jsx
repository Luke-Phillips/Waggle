import React from 'react';
import './badges.styles.scss';

const Badges = props => {
  const badges = props.badges.map(badge => <li>badge</li>);

  return <ul>{badges}</ul>;
};

export default Badges;
