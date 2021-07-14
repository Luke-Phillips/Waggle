import React, { useEffect, useState, useContext } from 'react';
import ProfileInfo from '../../components/profile-info/profile-info.component';
import HiveManager from '../../components/hive-manager/hive-manager.component';
import { UserContext } from '../../components/user-context/user-context';
import './settings-page.styles.scss';

const SettingsPage = () => {
  const userContext = useContext(UserContext);
  const [inviteCode, setInviteCode] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => getInviteCode(), [userContext.classId]);

  useEffect(() => getStudents(), [userContext.classId]);

  const getInviteCode = () => {
    fetch(`classrooms/invite-code/${userContext.classId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userContext.token,
      },
    })
      .then(res => res.json())
      .then(code => setInviteCode(code.inviteCode));
  };

  const getStudents = () => {
    fetch(`users/${userContext.classId}`)
      .then(res => res.json())
      .then(students => {
        setStudents(students);
      });
  };

  const profileChangeHandler = () => {};

  const enrollmentHandler =
    ({ userId, newStatus }) =>
    () => {
      const studentUpdate = { enrollmentStatus: newStatus };
      fetch(`users/${userId}/class/${userContext.classId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentUpdate),
      })
        .then(getStudents())
        .catch(error => {
          console.log(error.response.data);
        });
    };

  const roleHandler =
    ({ userId, newRole }) =>
    () => {
      const studentUpdate = { isModerator: newRole === 'moderator' };
      fetch(`users/${userId}/class/${userContext.classId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentUpdate),
      })
        .then(getStudents())
        .catch(error => {
          console.log(error.response.data);
        });
    };

  const filteredStudents = students.filter(
    s => s.UserId !== userContext.userId
  );
  const filteredStudent = students.filter(s => s.userId === userContext.userId);
  console.log('students', students);
  console.log('filtered students ', filteredStudents);
  console.log('filtered student', filteredStudent);

  return userContext.classId ? (
    <div className='settings-page'>
      <ProfileInfo
        user={filteredStudent}
        profileChangeHandler={profileChangeHandler}
      />
      <HiveManager
        inviteCode={inviteCode}
        students={filteredStudents}
        enrollmentHandler={enrollmentHandler}
        roleHandler={roleHandler}
      />
    </div>
  ) : (
    <p>Create or join a class before editing its settings</p>
  );
};

export default SettingsPage;
