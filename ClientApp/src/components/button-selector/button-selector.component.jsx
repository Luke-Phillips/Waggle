import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './button-selector.styles.scss';

const ButtonSelector = ({ postTypes = [],...props}) => {   
  
  return (  
  <>
    {props.labels.map((label, index) => (
      <CustomButton key={index} className='button'  onClick={postTypes[index]}> {label}</CustomButton>
      
    ))}
    
  </>
  )};

export default ButtonSelector;
