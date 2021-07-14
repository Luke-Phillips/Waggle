import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../user-context/user-context'
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import CustomButton from '../custom-button/custom-button.component'
import './class-nav.styles.scss';

const ClassNav = ({handleClassSelect}) => {
  const userContext = useContext(UserContext);
  const [classrooms, setClassrooms] = useState([]);
  const [hiveName, setHiveName] = useState('');

  useEffect(() => {
    getClassrooms();
  }, [userContext.userId]);

  const getClassrooms = () => {
    fetch(`classrooms/${userContext.userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token
      }
    })
    .then(res => res.json())
    .then(classes => {
      console.log('classrooms ', classes);
      setClassrooms(classes);
      if (classes.length > 0) {
        const classroom = classes[0];
        handleClassSelect(classroom.id, classroom.isModerator, classroom.isEnrolled);
      }
      return classes;
    });
  }

  const handleAddHive = () => {
    const newClass = {
      ownerId: userContext.userId,
      name: hiveName
    };

    fetch('/classrooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token
      },
      body: JSON.stringify(newClass)
    }).then(getClassrooms);
  }

  return (
    <div className='class-nav'>
      {classrooms.map(classroom => (
        <ClassNavIcon
          className='icon'
          key={classroom.id}
          classroom={classroom}
          handleClassSelect={handleClassSelect}
        />
      ))}
      <input
        type='text'
        value={hiveName}
        onChange={e => setHiveName(e.target.value)}
      />
      <CustomButton onClick={handleAddHive}>Add New Hive</CustomButton>
    </div>
  );
};

export default ClassNav;
