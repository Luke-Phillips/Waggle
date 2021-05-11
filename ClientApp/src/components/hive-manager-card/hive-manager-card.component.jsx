import React from 'react';
import InviteStudent from '../invite-student/invite-student.component';
import StudentList from '../student-list/student-list.component';
import './hive-manager-card.styles.scss';

const HiveManagerCard = () => {
  return (
    <div>
      <InviteStudent />
      <StudentList />
    </div>
  );
};

export default HiveManagerCard;
