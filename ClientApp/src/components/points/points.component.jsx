import React from 'react';
import './points.styles.scss';

const Points = props => {
  // points might come from a fetch within this component, we'll see
  return (
    <div>
      <p>this will be where the progress animation plays</p>
      <p>Points/Pollen: {props.points}</p>
    </div>
  );
};

export default Points;
