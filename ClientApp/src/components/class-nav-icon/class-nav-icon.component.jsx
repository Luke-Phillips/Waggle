import React, { useState } from 'react';
import { ReactComponent as Icon } from '../../assets/honey-jar.svg';
import './class-nav-icon.styles.scss';

const ClassNavIcon = ({ classroom, handleClassSelect, isFocused, handleFocusId }) => {
  const enrollmentStatus = ['pending', 'enrolled', 'unenrolled']; // make helper

  const onClickHandler = () => {
    console.log('status: ', enrollmentStatus[classroom.enrollmentStatus]);
    handleClassSelect(
      classroom.id,
      classroom.name,
      classroom.isModerator,
      enrollmentStatus[classroom.enrollmentStatus]);
  };

  return (
    <div className='class-nav-icon' onClick={() => {
      onClickHandler();
      handleFocusId(classroom?.id)
      }}>
      <Icon className={`icon ${isFocused ? 'focused' : ''}`} />
      <p>{classroom.name}</p>
    </div>
  );
};

export default ClassNavIcon;

