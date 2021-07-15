import React, { useEffect, useState, useContext } from 'react';
import ProfileInfo from '../../components/profile-info/profile-info.component';
import HiveManager from '../../components/hive-manager/hive-manager.component';
import { UserContext } from '../../components/user-context/user-context';
import './settings-page.styles.scss';

const SettingsPage = ({handleModChange, handleEnrollChange}) => {
  const userContext = useContext(UserContext);
  const [inviteCode, setInviteCode] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => getInviteCode(), [userContext.classroomId]);

  useEffect(() => getStudents(), [userContext.classroomId]);

  const getInviteCode = () => {
    fetch(`classrooms/invite-code/${userContext.classroomId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token,
      },
    })
      .then(res => res.json())
      .then(code => setInviteCode(code.inviteCode));
  };

  const getStudents = () => {
    fetch(`users/${userContext.classroomId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token,
      },
    })
      .then(res => res.json())
      .then(students => {
        setStudents(students);
      });
  };

  const profileChangeHandler = (profilePic, name, displayName) => {
    const studentUpdate = {
      userName: name,
      displayName: displayName,
      profilePicture: profilePic
    };
    console.log('username is ', studentUpdate.userName);
    console.log('display name is ', studentUpdate.displayName);
    console.log('profile pic is ', studentUpdate.profilePicture);

    fetch(`users/${userContext.userId}/class/${userContext.classroomId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token,
      },
      body: JSON.stringify(studentUpdate),
    })
      .then(getStudents)
      .catch(error => {
        console.log(error);
      });
  };

  const enrollmentHandler = ({ userId, newStatus }) =>
    () => {
      const studentUpdate = { enrollmentStatus: newStatus };
      fetch(`users/${userId}/class/${userContext.classroomId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userContext.token,
        },
        body: JSON.stringify(studentUpdate),
      })
        .then(() => {
          getStudents();
          handleEnrollChange(newStatus);
        })
        .catch(error => {
          console.log(error);
        });
    };

  const roleHandler = ({ userId, newRole }) =>
    () => {
      console.log('role is being handled');
      const isMod = newRole === 'moderator';
      const studentUpdate = { isModerator: isMod };
      fetch(`users/${userId}/class/${userContext.classroomId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userContext.token,
        },
        body: JSON.stringify(studentUpdate),
      })
        .then(() => {
          getStudents();
          handleModChange(isMod);
        })
        .catch(error => {
          console.log(error);
        });
    };

  const filteredStudents = students.filter(
    s => s.UserId !== userContext.userId
  );
  const [filteredStudent] = students.filter(s => s.userId === userContext.userId);
  
  console.log('students', students);
  console.log('filtered students ', filteredStudents);
  console.log('filtered student', filteredStudent);

  return (!userContext.classroomId ?
    <p>Create or join a class before contributing to a discussion</p> :
    userContext.enrollmentStatus !== 'enrolled' ?
    <p>Your enrollment is pending</p> :
    <div className='settings-page'>
      <ProfileInfo
        user={filteredStudent}
        profileChangeHandler={profileChangeHandler}
      />
      <HiveManager
        isMod={userContext.isModerator}
        inviteCode={inviteCode}
        students={filteredStudents}
        enrollmentHandler={enrollmentHandler}
        roleHandler={roleHandler}
      />
    </div>
  );
};

export default SettingsPage;
