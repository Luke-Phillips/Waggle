import React from 'react';
import Slider from '@material-ui/core/Slider';

import './ratings.styles.scss';

const Ratings = props => {
  if (props.postType === 'announcement' || props.postType === 'comment') {
    return null;
  }
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
  ];

  return (
    <div className='ratings'>
      <p>Rate this Post:</p>
      <Slider
        className='slider'
        step={1}
        marks={marks}
        min={0}
        max={3}
        defaultValue={0}
        valueLabelDisplay='auto'
      />
    </div>
  );
};

export default Ratings;
