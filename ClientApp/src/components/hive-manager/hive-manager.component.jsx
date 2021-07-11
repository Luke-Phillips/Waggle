import React, { useEffect, useState } from 'react';
import InviteStudent from '../invite-student/invite-student.component';
import StudentTable from '../student-table/student-table.component';
import './hive-manager.styles.scss';

const HiveManager = ({inviteCode, students, enrollmentHandler, roleHandler}) => (
    <div className='hiveManager'>
      <StudentTable
        students={students}
        enrollmentHandler = {enrollmentHandler}
        roleHandler = {roleHandler}
      />
      <div className='inviteCodeContainer'>
        <h4 className='inviteCodeHeader'>Class Invite Code: </h4> 
        <h5 className='inviteCode'>{inviteCode}</h5>
      </div>
    </div>
  );

export default HiveManager;
