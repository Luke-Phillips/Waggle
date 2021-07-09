import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, showbtn=true, ...otherProps }) => {
  if(!showbtn) {
    return null
  }

  return (
  <button className={`custom-button ${otherProps.addStyles}`} {...otherProps}>
    {children}
  </button>
  )};

export default CustomButton;
