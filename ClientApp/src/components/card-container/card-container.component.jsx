import React from 'react';
import './card-container.styles.scss';

const CardContainer = props => {
  return <div className='cardContainer'>{props.children}</div>;
};

export default CardContainer;