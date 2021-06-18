import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './button-selector.styles.scss';

const ButtonSelector = ({ postTypes = [],...props}) => {   

  console.log(props.logName)
  console.log('BtnSelector')
  console.log ('postTypes', postTypes)
  console.log('labels',props.labels)
  
  return (  
  <>
    {props.labels.map((label, index) => (
      <CustomButton key={index} className='button'  onClick={postTypes[index]}> {label}</CustomButton>
      
    ))}
    
  </>
  )};

export default ButtonSelector;
