import React from 'react';
import InviteStudent from '../invite-student/invite-student.component';
import StudentTable from '../student-table/student-table.component';
import './hive-manager-card.styles.scss';

const HiveManagerCard = () => {
  // get rid of this hardcoded crap later
  const hardcodedStudentData = [
    { name: 'Rob Tuft', role: 'moderator', email: 'rt@byui.edu' },
    { name: 'Luke Phillips', role: 'moderator', email: 'lp@byui.edu' },
    { name: 'Cade Gardner', role: 'student', email: 'cg@byui.edu' },
  ];

  return (
    <div>
      <InviteStudent inviteCode='XyKtaJ' /> {/* hardcoded for the moment */}
      <StudentTable students={hardcodedStudentData} />
    </div>
  );
};

export default HiveManagerCard;
