import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './button-selector.styles.scss';

const ButtonSelector = ({ clickFuncs = [],...props}) => {   
  
  return (  
  <>
    {props.labels.map((label, index) => (
      <CustomButton key={index} className='button'  onClick={clickFuncs[index]}> {label}</CustomButton>
      
    ))}
    
  </>
  )};

export default ButtonSelector;
