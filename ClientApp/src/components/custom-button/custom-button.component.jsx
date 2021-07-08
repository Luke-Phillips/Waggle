import React from 'react';
import DiscussionPost from '../discussion-post/discussion-post.component';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => {
  if(!otherProps.showbtn) {
    return null
  }

  return (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
  )};

export default CustomButton;
