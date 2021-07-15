import React from 'react';
import { ReactComponent as Icon } from '../../assets/honey-jar.svg';
import './class-nav-icon.styles.scss';

const ClassNavIcon = ({ classroom, handleClassSelect }) => {
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
    <div className='class-nav-icon' onClick={onClickHandler}>
      <Icon className='icon' />
      <p>{classroom.name}</p>
    </div>
  );
};

export default ClassNavIcon;
