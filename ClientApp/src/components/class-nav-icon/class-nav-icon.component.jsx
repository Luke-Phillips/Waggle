import React from 'react';
import { ReactComponent as Icon } from '../../assets/honey-jar.svg';
import './class-nav-icon.styles.scss';

const ClassNavIcon = ({ classroom, handleClassSelect }) => {
  const onClickHandler = () => {
    handleClassSelect(classroom.id, classroom.isModerator, classroom.IsEnrolled);
  };

  return (
    <div className='class-nav-icon' onClick={onClickHandler}>
      <Icon className='icon' />
      <img src='../../assets/honey-jar.svg' alt=''></img>
      <p>{classroom.name}</p>
    </div>
  );
};

export default ClassNavIcon;
