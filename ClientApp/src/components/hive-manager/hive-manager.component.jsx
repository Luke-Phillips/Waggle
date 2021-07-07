import React, { useEffect, useState } from 'react';
import InviteStudent from '../invite-student/invite-student.component';
import StudentTable from '../student-table/student-table.component';
import './hive-manager.styles.scss';

const HiveManager = ({inviteCode, students, enrollmentHandler, roleHandler}) => (
    <div>
      <p>Invite Code: {inviteCode}</p>
      <StudentTable
        students={students}
        enrollmentHandler = {enrollmentHandler}
        roleHandler = {roleHandler}
      />
    </div>
  );

export default HiveManager;
