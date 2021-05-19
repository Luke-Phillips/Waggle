import React from 'react';

import './slider.styles.scss';

const Slider = props => (
  <>
    <label for={props.label}>{props.label}</label>
    <input
      id={props.label}
      className='slider'
      type='range'
      min='0'
      max='3'
      step='1'
    ></input>
  </>
);

export default Slider;
