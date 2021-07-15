import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, showbtn=true, addStyles = '',...otherProps }) => {
  if(!showbtn) {
    return null
  }

  return (
  <button className={`custom-button ${addStyles}`} {...otherProps}>
    {children}
  </button>
  )};

export default CustomButton;
