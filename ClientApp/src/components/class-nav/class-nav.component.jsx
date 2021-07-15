import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../user-context/user-context';
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './class-nav.styles.scss';

const ClassNav = ({ handleClassSelect }) => {
  const userContext = useContext(UserContext);
  const [classrooms, setClassrooms] = useState([]);
  const [classroomName, setClassroomName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [focusId, setFocusId] = useState(userContext?.classroomId);

  const enrollmentStatus = ['pending', 'enrolled', 'unenrolled']; // make helper

  useEffect(() => {
    getClassrooms();
  }, [userContext.userId]);

  const getClassrooms = () => {
    fetch(`classrooms/${userContext.userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userContext.token,
      },
    })
      .then(res => res.json())
      .then(classes => {
        console.log('classrooms ', classes);
        setClassrooms(classes);
        if (classes.length > 0) {
          const classroom = classes[0];
          handleClassSelect(
            classroom.id,
            classroom.name,
            classroom.isModerator,
            enrollmentStatus[classroom.enrollmentStatus]
          );
          setFocusId(classroom.id);
        }
        return classes;
      });
  };

  const handleAddClassroom = () => {
    const newClass = {
      ownerId: userContext.userId,
      name: classroomName,
    };

    fetch('/classrooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userContext.token,
      },
      body: JSON.stringify(newClass),
    }).then(getClassrooms);
    setClassroomName('');
  };

  const handleJoinClassroom = () => {
    fetch(`/classrooms/${userContext.userId}/${inviteCode}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userContext.token,
      },
    }).then(getClassrooms);
    setInviteCode('');
  };

  const handleFocusId = newId => {
    setFocusId(newId);
  };

  return (
    <div className='class-nav'>
      <div className='button-container'>
        <div className='addClass'>
          {/* <input
            type='text'
            value={classroomName}
            onChange={e => setClassroomName(e.target.value)}
          /> */}
          <FormInput
            type='text'
            value={classroomName}
            onChange={e => setClassroomName(e.target.value)}
            label='Create Hive'
          />
          <CustomButton className='btn' onClick={handleAddClassroom}>
            Create Hive
          </CustomButton>
        </div>
        <div className='joinHive'>
          {/* <input
            type='text'
            value={inviteCode}
            onChange={e => setInviteCode(e.target.value)}
          /> */}

          <FormInput
            type='text'
            value={inviteCode}
            onChange={e => setInviteCode(e.target.value)}
            label='Join Hive'
          />

          <CustomButton className='btn' onClick={handleJoinClassroom}>
            Join Hive
          </CustomButton>
        </div>
      </div>

      {classrooms.map(classroom => (
        <ClassNavIcon
          className='icon'
          key={classroom.id}
          classroom={classroom}
          handleClassSelect={handleClassSelect}
          isFocused={classroom.id === focusId}
          handleFocusId={handleFocusId}
        />
      ))}
    </div>
  );
};

export default ClassNav;
