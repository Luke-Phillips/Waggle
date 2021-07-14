import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../user-context/user-context'
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import CustomButton from '../custom-button/custom-button.component'
import './class-nav.styles.scss';

const ClassNav = ({handleClassSelect}) => {
  const userContext = useContext(UserContext);
  const [classrooms, setClassrooms] = useState([]);
  const [classroomName, setClassroomName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

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
        handleClassSelect(classroom.id, classroom.name, classroom.isModerator, classroom.isEnrolled);
      }
      return classes;
    });
  }

  const handleAddClassroom = () => {
    const newClass = {
      ownerId: userContext.userId,
      name: classroomName
    };

    fetch('/classrooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token
      },
      body: JSON.stringify(newClass)
    }).then(getClassrooms);
    setClassroomName('');
  }

  const handleJoinClassroom = () => {
    fetch(`/classrooms/${userContext.userId}/${inviteCode}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token
      }
    }).then(getClassrooms);
    setInviteCode('');
  }

  return (
    <div className='class-nav'>
    <input
        type='text'
        value={classroomName}
        onChange={e => setClassroomName(e.target.value)}
      />
      <CustomButton onClick={handleAddClassroom}>Create New Hive</CustomButton>
      <input
        type='text'
        value={inviteCode}
        onChange={e => setInviteCode(e.target.value)}
      />
      <CustomButton onClick={handleJoinClassroom}>Join Hive</CustomButton>
      {classrooms.map(classroom => (
        <ClassNavIcon
          className='icon'
          key={classroom.id}
          classroom={classroom}
          handleClassSelect={handleClassSelect}
        />
      ))}
    </div>
  );
};

export default ClassNav;
