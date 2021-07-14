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
<<<<<<< HEAD
      {/* <img src='../../assets/honey-jar.svg' alt=''></img> */}
=======
>>>>>>> a5ae6cefdb979c9985426fff7e36b6f0bc70ded1
      <p>{classroom.name}</p>
    </div>
  );
};

export default ClassNavIcon;
