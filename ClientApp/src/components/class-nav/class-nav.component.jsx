import React, { useState, useEffect } from 'react';
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import { UserAndClassIds } from '../../components/user-and-class-context/user-and-class-context'
import './class-nav.styles.scss';

const ClassNav = props => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    fetch(`/userclassrooms/${props.userId}`)
      .then(res => res.json())
      .then(response => {
        setClassrooms(response);
      });
  }, [props.userId]);

  console.log('ClassNav Classrooms:', classrooms);
  console.log('ClassNav UserID:', props.userId); 
  return (
    <div className='class-nav'>
      {classrooms.map(classroom => (
        <ClassNavIcon
          className='icon'
          key={classroom.classroomID}
          classes={classroom}
        />
      ))}
    </div>
  );
};

export default ClassNav;
