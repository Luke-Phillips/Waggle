import React, { useEffect, useState } from 'react';
import ProfileInfo from '../../components/profile-info/profile-info.component';
import HiveManager from '../../components/hive-manager/hive-manager.component';
import { UserAndClassIds } from '../../components/user-and-class-context/user-and-class-context'
import './settings-page.styles.scss';
import { Fragment } from 'react';

const SettingsPage = () => {
  const userId = '0006'; // hardcoded for now, use context later
  const classId = 2; // hardcoded for now, use context later
  const [inviteCode, setInviteCode] = useState('');
  const [students, setStudents] = useState([]);
  const [effectSubscriber, setEffectSubscriber] = useState(1); // change value to force useEffect to run
                                                               // ...definitely open to better ideas

  useEffect(() => {
    fetch(`classrooms/invite-code/${classId}`)
      .then(res => res.json())
      .then(code => setInviteCode(code.inviteCode))
  }, []);

  useEffect(() => {
    fetch(`users/class/${classId}`)
      .then(res => res.json())
      .then(students => {
        setStudents(students);
      })
  }, [classId, effectSubscriber]);

  const profileChangeHandler = () => {}

  const enrollmentHandler = ({userId, newStatus}) => (
    () => {
      const studentUpdate = { enrollmentStatus: newStatus };
      fetch(`users/${userId}/class/${classId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentUpdate)
      }).then(response => {
        setEffectSubscriber(() => -effectSubscriber)
      }).catch(error => {
        console.log(error.response.data);
      })
    }
  );

  const roleHandler = ({userId, newRole}) => (
    () => {
      const studentUpdate = { isModerator: newRole === 'moderator' }
      fetch(`users/${userId}/class/${classId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentUpdate)
      }).then(response => {
        setEffectSubscriber(() => -effectSubscriber)
      }).catch(error => {
        console.log(error.response.data);
      })
    }
  );

  console.log('students', students);
  const filteredStudents = students.filter(s => s.UserId !== userId);
  console.log('user id', userId);
  console.log(filteredStudents);

  return (
    <div className='settings-page'>
      <ProfileInfo
        user={students.filter(s => s.userId === userId)}
        profileChangeHandler = {profileChangeHandler}
      />
      <HiveManager
        inviteCode={'XyKtaJ'}
        students={students.filter(s => s.userId !== userId)}
        enrollmentHandler={enrollmentHandler}
        roleHandler={roleHandler}
      />
    </div>
  )
};

export default SettingsPage;
