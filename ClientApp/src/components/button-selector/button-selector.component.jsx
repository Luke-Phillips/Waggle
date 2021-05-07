import React, { Fragment } from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './button-selector.styles.scss';

const ButtonSelector = props => (
  <>
    {props.labels.map(prop => (
      <CustomButton className='button'>{prop}</CustomButton>
    ))}
  </>
);

export default ButtonSelector;
