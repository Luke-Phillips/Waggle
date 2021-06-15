import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './button-selector.styles.scss';

const ButtonSelector = props => {   
  console.log('functions: ', props.functions)
  return (  
  <>
    {props.labels.map((prop, index) => (
      <CustomButton className='button' > {prop}</CustomButton>
    
    ))}
  </>
  )};

export default ButtonSelector;
